
export default function shortener(addr)
{
  return (
      <div>
          {
                addr.substring(0,4) + '...' + addr.substring(addr.length-4,addr.length)
          }
    </div>
  )
}



