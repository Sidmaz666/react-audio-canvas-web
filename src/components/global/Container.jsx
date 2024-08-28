export default function Container({children, className}) {
  return (
    <section className={
      `
    	p-2
	${className ? className : null}
      `
    }
    >
  		{children}
    </section>
  )
}
