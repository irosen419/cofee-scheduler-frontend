
function EmployeeCard(employee) {
  let { employee: { firstName, lastName } } = employee
  let fullName = firstName + " " + lastName

  return (
    <div className='employee-card'>
      <img src="coffee_mug_stock.jpeg" alt={`${fullName}`} />
      <p className="full-name">
        {fullName}
      </p>
    </div >
  )
}

export default EmployeeCard