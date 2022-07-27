import Grid from '@mui/material/Grid';

import RepoCard from './RepoCard';

function ResultsDisplay(props) {

    const results = props.data

    if (results) {
        return (
            <>
                {results.map(x => {
                    return (
                        <RepoCard 
                        name={x['name']}
                        owner={x['owner']['login']}
                        full_name={x['full_name']}
                        avatar={x['owner']['avatar_url']}
                        description={x['description']}
                        url={x['url']}
                        key={x['id']}
                        />
                    )
                })}
            </>
        )
    }
    else {
        return null
    }



}

export default ResultsDisplay