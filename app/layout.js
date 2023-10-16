import './globals.css'
import Link from 'next/link'


export const metadata = {
  title: 'BenPay',
  description: 'Bens easy invoicing app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-zinc-900 text-zinc-200">
        <div className="flex flex-col gap-10 items-center p-6">
        <nav className='flex justify-between p-4 w-2/3'>
            <Link href="/" >Form</Link>
            <Link href="/invoice">Invoice</Link>
          <Link href="/search" >Search</Link>
          <Link href="/edit" >Edit</Link>  
        </nav>  
          {children}
        </div>
      </body>
    </html>
  )
}
