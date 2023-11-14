
import { convertSecondsToHoursMinutes } from '../../utils/date.utils';

export default function AppFeaturedContainer({featuredMovie}) {
  ;

    return (
        <article className="featured-container">
          <h3>Movie</h3>
          <img src={require(`../../assets/images/${featuredMovie.TitleImage}`)} alt="featured img" />
          <div>
            <h2 className='t-bold'>{featuredMovie.Title}</h2>
            <p className='t-regular'>{featuredMovie.ReleaseYear} {featuredMovie.MpaRating} {convertSecondsToHoursMinutes(featuredMovie.Duration)} </p>
            <p className='t-regular'>{featuredMovie.Description}</p>
            <button class="button play-button t-bold"><i class="icon-play"></i>Play</button>
            <button class="button more-info-button t-bold">More Info</button>
          </div>
        </article>
    )
}