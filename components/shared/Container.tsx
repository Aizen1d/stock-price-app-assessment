const Container = ({children}: {children: React.ReactNode}) => {
  return (
    <div className="container flex flex-col min-h-screen items-center">
      {children}
    </div>
  )
}

export default Container