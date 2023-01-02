import './style.scss';
import Arrow from '../../shared/arrow';


const Showcase = ({ data, transition }) => {
  return (
    <div className="projects_showcase">
        {data.map((project) => (
            <div key={project.id} className={`showcase_item ${transition === 'zoomout' ? 'zoomOut' : transition === 'zoomin' ? 'zoomIn' : '' }`}>
                <div className="meta_content">
                    <h3>{project.name}</h3>
                    <div className="go_to__cta">
                        <span className="text">Project Details</span>
                        <Arrow />
                    </div>
                </div>
                <img src={project.media.thumbnail} alt={project.name} />
            </div>
        ))}
    </div>
  )
}

export default Showcase;