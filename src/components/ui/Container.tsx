import React from 'react'

interface Props {
    children: React.ReactNode;
    className?: string;
}

const Container = ({children, className = ""}: Props) => {
  return (
    <section className={`container mx-auto px-4 sm:px-1 md:px-2 ${className}`}>{children}</section>
  )
}

export default Container    