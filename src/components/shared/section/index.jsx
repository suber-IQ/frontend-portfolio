import './style.scss';


function Section({ children, id, className,title,background}) {
  return (
    <div id={id || ''} className={`section ${className ? className : ""} ${background === 'dark' ? 'dark': 'light'}`}>
         <div className="content">
            {title && (
                <div className="section_title">
                     <h2>{title}</h2>
                </div>
            )}
            {children}
         </div>
    </div>
  )
}

export default Section