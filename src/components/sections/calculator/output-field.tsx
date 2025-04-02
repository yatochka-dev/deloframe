import { useEffect, useState } from 'react'
import { useMotionValue, useSpring } from 'framer-motion'

interface OutputFieldProps {
  value: number
  label: string
}

const AnimatedNumber = ({ value }: { value: number }) => {
  // Create a motion value to track the number.
  const motionValue = useMotionValue(value)
  // Create a spring animation based on the motion value.
  const springValue = useSpring(motionValue, { stiffness: 100, damping: 20 })
  const [displayValue, setDisplayValue] = useState(value)

  // Subscribe to changes on the spring value to update the display.
  useEffect(() => {
    const unsubscribe = springValue.on('change', (latest) => {
      // Round the latest value and update state.
      setDisplayValue(Math.round(latest))
    })
    return () => unsubscribe()
  }, [springValue])

  // When the prop value changes, update the motion value.
  useEffect(() => {
    motionValue.set(value)
  }, [value, motionValue])

  // Format the number with commas.
  const formattedValue = displayValue.toLocaleString()

  return <span>{formattedValue}</span>
}

const OutputField = ({ value = 0, label }: OutputFieldProps) => {
  return (
    <div className="border rounded-md p-4 inline-block w-full">
      <div className="text-gray-800 dark:text-gray-100 font-medium mb-1">{label}</div>
      <div className="text-2xl font-semibold">
        <AnimatedNumber value={value} />
      </div>
    </div>
  )
}

export default OutputField
