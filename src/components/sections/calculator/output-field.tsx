import { useEffect, useState } from 'react'
import { useMotionValue, useSpring } from 'framer-motion'
import { Loader } from 'lucide-react'
import { cn } from '@/lib/utils'

interface OutputFieldProps {
  value: number
  label: string
  isPending: boolean
}

const AnimatedNumber = ({ value }: { value: number }) => {
  const motionValue = useMotionValue(value)
  const springValue = useSpring(motionValue, { stiffness: 100, damping: 20 })
  const [displayValue, setDisplayValue] = useState(value)

  useEffect(() => {
    const unsubscribe = springValue.on('change', (latest) => {
      setDisplayValue(Math.round(latest))
    })
    return () => unsubscribe()
  }, [springValue])

  useEffect(() => {
    motionValue.set(value)
  }, [value, motionValue])

  const formattedValue = displayValue.toLocaleString()

  return <span>{formattedValue}</span>
}

const OutputField = ({ value = 0, label, isPending }: OutputFieldProps) => {
  return (
    <div className="border rounded-md p-4 inline-block w-full">
      <div className="text-gray-800 dark:text-gray-100 font-medium mb-1 ">{label} </div>
      <div className="text-2xl font-semibold">
        <AnimatedNumber value={value} />
        <Loader
          size={20}
          className={cn(
            'animate-spin inline-block ml-2 opacity-100 transition-opacity ease-in-out duration-200',
            !isPending && 'opacity-0 ',
          )}
        />
      </div>
    </div>
  )
}

export default OutputField
