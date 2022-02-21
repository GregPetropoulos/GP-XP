
import ProjectTrackerImage from './project-tracker.png';
import GolfImages from './golf.png';
import EmployeeImage from './employee-directory.png';
import BuildAPageImage from './build-a-page.png';
import DevSquadImage from './dev-squad.png';
import ExcavationImage from './excavation.png';
import ContactBookImage from './contact-book.png';
import GithubFinderImage from './github-finder.png';
import ITLoggerImage from './it-logger.png';

export const ProjectImage = () => {
  return (
    [
        {
          id: 0,
          imageId: 435850053,
          imageRep: ITLoggerImage,
          imageName: 'IT-Logger-App',
          repo: {}
          // repo: '' added in by useEffect
        },
        {
          id: 1,
          imageId: 383392571,
          imageRep: DevSquadImage,
          imageName: 'Dev-Squad',
          repo: {}
          // repo: '' added in by useEffect
        },
        {
          id: 2,
          imageId: 426586061,
          imageRep: ContactBookImage,
          imageName: 'Contact-Book',
          repo: {}
          // repo: '' added in by useEffect
        },
        {
          id: 3,
          imageId: 391642169,
          imageRep: ExcavationImage,
          imageName: 'GP-Excavation',
          repo: {}
    
          // repo: '' added in by useEffect
        },
        {
          id: 4,
          imageId: 421770170,
          imageRep: GithubFinderImage,
          imageName: 'Github-Finder',
          repo: {}
          // repo: '' added in by useEffect
        },
        {
          id: 5,
          imageId: 365557403,
          imageRep: GolfImages,
          imageName: 'Golf-Assistant-App',
          repo: {}
          // repo: '' added in by useEffect
        },
        {
          id: 6,
          imageId: 370526931,
          imageRep: EmployeeImage,
          imageName: 'Employee Directory',
          repo: {}
          // repo: '' added in by useEffect
        },
        {
          id: 7,
          imageId: 341170033,
          imageRep: ProjectTrackerImage,
          imageName: 'Project-Tracker',
          repo: {}
        },
        {
          id: 8,
          imageId: 379113296,
          imageRep: BuildAPageImage,
          imageName: 'Build-A-Page',
          repo: {}
        }
      ]
  )
}
