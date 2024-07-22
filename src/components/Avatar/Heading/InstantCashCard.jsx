
export default function InstantCashPage({title,subTitle,titlePrice,subTitlePrice}) {
  return (
    <div className="flex justify-between items-center">
    <div className="left">
      <h1>{title}</h1>
    <p>{subTitle}</p>
    </div>
    <div className="text-right">
    <h1>{titlePrice}</h1>
    <p >{subTitlePrice}</p>
    </div>
  </div>
  )
}
