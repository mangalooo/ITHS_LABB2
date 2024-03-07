import { useState, useMemo } from 'react'
import { format } from 'date-fns';

function CopyrightDate() {

    const [date, setDate] = useState(Date);

    const handleDate = () => {
        let todaysDate = Date.now();
        setDate(todaysDate);
      };

    const checkDate = useMemo(() => {
        return SetCopyrightDate(date)
    }, [date])

  return (
    <>
        {handleDate}
        {checkDate}
    </>
  )
}

function SetCopyrightDate(getDate) {
    let formattedDate = format(getDate, 'MMMM do, yyyy');
    const startDate = new Date("2024-01-08");
    let formattedStartDate = format(startDate, "MMMM do, yyyy");

    return (
    <p>
        © &nbsp; {formattedStartDate} &nbsp; - &nbsp; {formattedDate}
    </p>
)}

export default CopyrightDate
