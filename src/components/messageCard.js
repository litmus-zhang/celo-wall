import shortener from "../hooks/shortener";


export default function MessageCard({ address, time, message })
{
    address= "0x374b0F8e1253e7dD2257C6f9Bfb6e61F8AfFBd86"
    const addr = shortener(address) 
  return (
      <div className='card'>
          <div>Address: <span>{addr}</span></div>
          <div>Time: <span>{time}</span></div>
          <div>Message: <span>{
          message}</span></div>

          <style jsx>{`
          .card{
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: space-between;
                padding: 1rem;
                width: 300px;
                height: fit-content;
                border-radius: 10px;
                background-color: #a5d5d5;
          }
          .card div{
                display: flex;
                font-size: 14px;
          }
            .card div span{
                margin-left: 0.5rem;
                font-weight: bold;
            }

          .card:nth-child(odd){
                background-color: #f2f2f2;
          }
          ` }</style>
    </div>
  )
}
