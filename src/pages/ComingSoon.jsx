import React from 'react'
import FlipCountdown from '@rumess/react-flip-countdown';

const ComingSoon = () => {
    return (
        <div class="wrapper">
            <h1>coming soon<span class="dot">.</span></h1>
            <div className="counter_wrapper">
                <FlipCountdown
                    hideYear
                    hideMonth
                    theme='light'
                    endAtZero
                    size='large'
                    endAt={'2024-01-05 00:00:00'}
                />
            </div>
            <p>Jesus Youth Kerala Campus Ministry</p>
            <div class="icons">
                <a href="">Follow Us On</a>
                <a href="" className="ico">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 8.75005C10.2051 8.75005 8.75 10.2051 8.75 12C8.75 13.795 10.2051 15.25 12 15.25C13.7949 15.25 15.25 13.795 15.25 12C15.25 10.2051 13.7949 8.75005 12 8.75005Z" fill="black"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M6.76954 3.08151C10.2177 2.69614 13.7824 2.69614 17.2305 3.08151C19.1289 3.29369 20.6601 4.78947 20.8829 6.69452C21.2952 10.2195 21.2952 13.7806 20.8829 17.3056C20.6601 19.2106 19.1289 20.7064 17.2305 20.9186C13.7824 21.304 10.2177 21.304 6.76954 20.9186C4.87114 20.7064 3.33995 19.2106 3.11713 17.3056C2.70485 13.7806 2.70485 10.2195 3.11713 6.69452C3.33995 4.78947 4.87114 3.29369 6.76954 3.08151ZM17 6.00005C16.4477 6.00005 16 6.44776 16 7.00005C16 7.55233 16.4477 8.00005 17 8.00005C17.5523 8.00005 18 7.55233 18 7.00005C18 6.44776 17.5523 6.00005 17 6.00005ZM7.25 12C7.25 9.37669 9.37665 7.25005 12 7.25005C14.6234 7.25005 16.75 9.37669 16.75 12C16.75 14.6234 14.6234 16.75 12 16.75C9.37665 16.75 7.25 14.6234 7.25 12Z" fill="black"></path></svg>
                </a>
            </div>
        </div>
    )
}

export default ComingSoon
