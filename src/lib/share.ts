/**
 * A utility function for sharing content using the Web Share API with fallbacks
 */

// Enums for sharing status and error types
export enum ShareStatus {
  IDLE = 'idle',
  SHARING = 'sharing',
  SUCCESS = 'success',
  ERROR = 'error',
  UNSUPPORTED = 'unsupported',
}

export enum ShareErrorType {
  BROWSER_UNSUPPORTED = 'browser_unsupported',
  PERMISSION_DENIED = 'permission_denied',
  INVALID_CONTENT = 'invalid_content',
  NETWORK_ERROR = 'network_error',
  UNKNOWN_ERROR = 'unknown_error',
}

// Interface for share options
export interface ShareOptions {
  text?: string
  imageUrl?: string
  title?: string
  fallbackToClipboard?: boolean
}

// Interface for share result
export interface ShareResult {
  status: ShareStatus
  errorType?: ShareErrorType
  errorMessage?: string
}

/**
 * Shares content using the Web Share API with fallbacks for unsupported browsers
 * @param options - The content to share and sharing options
 * @returns A promise that resolves with the sharing result
 */
export async function shareContent(options: ShareOptions): Promise<ShareResult> {
  const { text, imageUrl, title = 'Shared Content', fallbackToClipboard = true } = options

  // Validate input
  if (!text && !imageUrl) {
    return {
      status: ShareStatus.ERROR,
      errorType: ShareErrorType.INVALID_CONTENT,
      errorMessage: 'No content provided to share',
    }
  }

  // Check if Web Share API is supported
  if (typeof navigator === 'undefined' || !navigator.share) {
    console.log('Web Share API not supported')

    // Fallback to clipboard if enabled
    if (fallbackToClipboard) {
      try {
        // Create fallback message with text and image URL
        const fallbackText = [text, imageUrl ? `Image: ${imageUrl}` : '']
          .filter(Boolean)
          .join('\n\n')

        await navigator.clipboard.writeText(fallbackText)

        return {
          status: ShareStatus.UNSUPPORTED,
          errorMessage: 'Web Share API not supported. Content copied to clipboard instead.',
        }
      } catch (error) {
        return {
          status: ShareStatus.ERROR,
          errorType: ShareErrorType.BROWSER_UNSUPPORTED,
          errorMessage: 'Web Share API not supported and clipboard access failed.',
        }
      }
    }

    return {
      status: ShareStatus.UNSUPPORTED,
      errorType: ShareErrorType.BROWSER_UNSUPPORTED,
      errorMessage: 'Web Share API not supported in this browser.',
    }
  }

  try {
    // Prepare share data
    const shareData: ShareData = { title }

    if (text) {
      shareData.text = text
    }

    if (imageUrl) {
      // For image URLs, we need to fetch the image and convert it to a blob
      try {
        const response = await fetch(imageUrl)
        if (!response.ok) {
          throw new Error(`Failed to fetch image: ${response.statusText}`)
        }

        const blob = await response.blob()
        const file = new File([blob], 'shared-image.jpg', { type: blob.type })
        shareData.files = [file]
      } catch (error) {
        console.error('Error preparing image for sharing:', error)
        // If image fetch fails but we have text, continue with text-only sharing
        if (!text) {
          return {
            status: ShareStatus.ERROR,
            errorType: ShareErrorType.NETWORK_ERROR,
            errorMessage: `Failed to fetch image: ${(error as Error).message}`,
          }
        }
      }
    }

    // Attempt to share
    await navigator.share(shareData)

    return {
      status: ShareStatus.SUCCESS,
    }
  } catch (error) {
    console.error('Error sharing content:', error)

    // Handle specific error types
    const err = error as Error

    if (err.name === 'AbortError') {
      // User cancelled the share operation
      return {
        status: ShareStatus.IDLE,
        errorMessage: 'Share operation was cancelled.',
      }
    } else if (err.name === 'NotAllowedError') {
      return {
        status: ShareStatus.ERROR,
        errorType: ShareErrorType.PERMISSION_DENIED,
        errorMessage: 'Permission to share was denied.',
      }
    } else {
      return {
        status: ShareStatus.ERROR,
        errorType: ShareErrorType.UNKNOWN_ERROR,
        errorMessage: err.message || 'An unknown error occurred while sharing.',
      }
    }
  }
}
