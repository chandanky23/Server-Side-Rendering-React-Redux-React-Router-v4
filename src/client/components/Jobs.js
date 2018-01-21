import React from 'react';
import { connect } from 'react-redux'


class Jobs extends React.Component {
    render() {
        const { jobs } = this.props

        return (
            <div>
                <ul>
                    {jobs.map(job => {
                        return <li key={job.id + job.description}>
                            <div>{job.id}</div>
                        </li>
                    })}
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { jobs: state.jobs };
}

export default connect(mapStateToProps)(Jobs)