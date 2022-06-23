import React, { useState } from 'react'
import moment, { Moment } from 'moment'

import { Container, Month, Box, BarDate, DayGray, BoxDate, Day } from './styles'

interface BoxDatesType {
    press: (day: Moment) => void
}

const BoxDates: React.FC<BoxDatesType> = ({ press }) => {

    const [activeDay, setActiveDay] = useState<Moment>(moment())

    const listEventsDay = (day: Moment) => {
        setActiveDay(day)
        press(day)
    }

    const getType = (date: Moment) => {
        let today = moment(new Date).format('YYYY-MM-DD')
        let dateParam = moment(date).format('YYYY-MM-DD')

        if (dateParam == today) {
            return 1
        } else if (dateParam == moment(activeDay).format('YYYY-MM-DD')) {
            return 2
        } else {
            return 0
        }
    }

    const showDaysWeek = () => {
        let days = [0, 1, 2, 3, 4, 5, 6]
        return days.map(index => {
            let day = moment().day(index)
            return (
                <BarDate key={index}>
                    <DayGray>{day.format('ddd')}</DayGray>
                    <BoxDate typeColor={getType(day)} onPress={() => listEventsDay(day)}>
                        <Day typeColor={getType(day)}>{day.format('DD')}</Day>
                        {getType(day) == 1 ? <Day typeColor={1}>Hoje</Day> : null}
                    </BoxDate>
                </BarDate>
            )
        })
    }

    return (
        <Container>
            <Month>{moment(new Date).format('MMMM')}</Month>
            <Box>
                {showDaysWeek()}
            </Box>
        </Container>
    )
}

export default BoxDates