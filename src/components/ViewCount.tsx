'use client'

import React from 'react'
import { formatNumber } from '@/utils'

const ViewCount = () => {
  const [count, setCount] = React.useState(-1)

  React.useEffect(() => {
    fetch('/api/notion')
      .then((data) => data.json())
      .then(({ count }) => setCount(count))
      .catch(() => setCount(-1))
  }, [])

  if (count < 0) {
    return (
      <p className="mt-12 flex flex-wrap items-center justify-center break-keep text-center text-base font-medium md:text-lg">
        <span className="mr-1 inline-flex items-center justify-center whitespace-nowrap">
          <span className="mr-1 h-5 w-16 animate-pulse rounded bg-gray-200" />
          번째{' '}
        </span>
        부적을 만들어 주세요!
      </p>
    )
  }

  return (
    <p className="mt-12 break-keep text-center text-base font-medium md:text-lg">
      {formatNumber(count)}번째 부적을 만들어 주세요!
    </p>
  )
}

export default ViewCount
