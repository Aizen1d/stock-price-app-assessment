interface CardProps {
  label: string
  value: number | undefined
  sign: string
}

const Card = (prop: CardProps) => {
  return (
    <>
      <div className="flex flex-col bg-BLACK_CARD_BG w-full lg:w-1/3 p-5 rounded-lg shadow-md space-y-3">
        <label className="text-md text-WHITE_LABEL_TEXT">{prop.label}</label>
        <label className="text-md font-bold text-WHITE_LABEL_TEXT">
          {/* Determine what sign to put and where to place it. */}
          {prop.sign === '%' ? `${prop.value?.toFixed(2)}%` : `${prop.sign}${prop.value}`}
        </label>
      </div>
    </>
  )
}

export default Card