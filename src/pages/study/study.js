import React from 'react'
import {TimeStudy} from "../../components/timeStudy/timeStudy";
import {compose} from "redux";
import {withAuthRedirect} from "../../components/hoc/withAuthRedirect";

const Study = () => {

    return (
          <div>
              <TimeStudy /> <br/> <br/>
          </div>
    );
}

export default compose(withAuthRedirect)(Study)



