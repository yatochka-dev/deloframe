import { NextResponse, NextRequest } from 'next/server'

/**
 * Middleware for handling locale-based routing and redirection.
 * Responsible for determining the preferred locale based on the request context.
 */
export function middleware(request: NextRequest) {
  const supportedLocales = ['he', 'ru'] as const
  const defaultLocale: (typeof supportedLocales)[number] = 'ru'
  const { pathname } = request.nextUrl

  if (isPathLocaleSupported(pathname, supportedLocales)) {
    return NextResponse.next()
  }

  const cookieLocale = request.cookies.get('locale')?.value
  let preferredLocale = determinePreferredLocale(cookieLocale, request)

  if (!preferredLocale) {
    preferredLocale = defaultLocale
  }

  return handleLocaleRedirection(preferredLocale, pathname, request, cookieLocale)
}

/**
 * Checks if the pathname starts with a supported locale.
 */
function isPathLocaleSupported(pathname: string, locales: readonly string[]): boolean {
  return locales.some((locale) => pathname.startsWith(`/${locale}`))
}

/**
 * Determines the preferred locale from cookies or request headers.
 */
function determinePreferredLocale(
  cookieLocale: string | undefined,
  request: NextRequest,
): string | undefined {
  if (cookieLocale) {
    return cookieLocale
  }

  const acceptLangHeader = request.headers.get('accept-language')
  if (acceptLangHeader) {
    const preferredLocale = extractPreferredLocale(acceptLangHeader)
    if (preferredLocale) return preferredLocale
  }

  return undefined
}

/**
 * Extracts the preferred locale from the Accept-Language header.
 */
function extractPreferredLocale(header: string): string {
  const locales = header.split(',').map((lang) => lang.split(';')[0])
  for (const lang of locales) {
    const langCode = lang.split('-')[0]
    if (['he', 'ru'].includes(langCode)) {
      return langCode
    }
  }
  // Default to 'ru' if other languages are encountered.
  return 'ru'
}

/**
 * Handles redirection to the correct locale path and sets locale cookies.
 */
function handleLocaleRedirection(
  locale: string,
  pathname: string,
  request: NextRequest,
  cookieLocale: string | undefined,
) {
  const redirectUrl = new URL(`/${locale}${pathname}`, request.url)
  const response = NextResponse.redirect(redirectUrl)

  if (!cookieLocale || cookieLocale !== locale) {
    response.cookies.set('locale', locale, {
      maxAge: 60 * 60 * 24 * 365, // 1 year
    })
  }

  return response
}

export const config = {
  matcher: '/',
}
