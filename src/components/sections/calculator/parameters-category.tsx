'use client'
import React from 'react'
import { ParameterData } from '@/collections/Parameter'
import useCalcStore from '@/stores/calc'

interface ParametersCategoryProps {
  params: ParameterData[]
}

const ParametersCategory = (props: ParametersCategoryProps) => {
  const params = props.params
  console.log(params)
  const isCustomConfig = useCalcStore((s) => s.customConfig)
  return (
    <div className={'hello'}>
      {params.map((parameter) => (
        <div key={`cat-${parameter.category}-${parameter.id}`}>{parameter.name}</div>
      ))}
    </div>
  )
}

export default ParametersCategory
