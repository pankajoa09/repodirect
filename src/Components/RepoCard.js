import Grid from '@mui/material/Grid';
import './RepoCard.css'



function RepoCard(props) {
    const { name, owner, avatar, description, full_name} = props
    return (
        <div style={{ marginTop: 20 }}>

            <Grid container spacing={2}>
                <Grid item md={2} lg={2} sm={2} xs={2}>
                    <img className="RepoCard-image" src={avatar}></img>

                </Grid>
                <Grid item md={10} lg={10} sm={10} xs={10}>
                    <h3 className="RepoCard-title">
                        <a href={'https://github.com/'+owner} style={{ color: '#0969da', textDecoration: 'none'}}>{owner}</a> / <a href={'https://github.com/'+full_name} style={{ color: '#0969da', textDecoration: 'none', fontWeight: 900 }}>{name} </a>
                    </h3>
                    <p className="RepoCard-description">
                        {description} </p>
                    

                </Grid>
            </Grid>
        </div>
    )
}



export default RepoCard