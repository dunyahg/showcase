import Link from 'next/link'
import React from 'react'

type item = {
    title : string
}

function SidebarMenuItem({title}: item) {
  return (
    <div>
        <Link href='#'> 
           <div> {title}</div>
        </Link>
    </div>
  )
}

export default SidebarMenuItem