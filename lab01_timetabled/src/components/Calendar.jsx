import React from "react";
import { ReactDOM } from "react";

import Event from "./Event";

const Calendar = () => {
  return(
    <div className="calendar">
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Sunday</th>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
            <th>Saturday</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="time">8am</td>
            <Event title="Wake Up" color="blue"/>
            <Event title="Placeholder" color="green"/>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <Event title="Wake Up" color="pink"/>
          </tr>
          <tr>
            <td className="time">9am</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <Event title="Meditation" color="pink"/>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="time">10am</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="time">11am</td>
            <td></td>
            <td></td>
            <td></td>
            <Event title="Wake Up" color="pink"/>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="time">12pm</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <Event title="Wake Up" color="green"/>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="time">1pm</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="time">2pm</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <Event title="Wake Up" color="green"/>
            <td></td>
          </tr>
          <tr>
            <td className="time">3pm</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="time">4pm</td>
            <td></td>
            <td></td>
            <td></td>
            <Event title="Wake Up" color="blue"/>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="time">5pm</td>
            <Event title="Wake Up" color="pink"/>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Calendar;