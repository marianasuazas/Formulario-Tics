const variantClass = {
  primary: 'btn-submit',
  firma: 'btn-firmar',
  limpiar: 'btn-limpiar-firma',
}

export default function Button({ variant = 'primary', type = 'button', onClick, disabled, children }) {
  return (
    <button
      type={type}
      className={variantClass[variant]}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
