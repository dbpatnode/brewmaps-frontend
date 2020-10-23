import * as React from "react";
import { PureComponent } from "react";
import { Link } from "react-router-dom";

export default class BreweryCard extends PureComponent {
  render() {
    const { info } = this.props;
    const displayName = `${info.brewery_name}`;
    const website = `${info.website_url}`;
    const phoneNumber = `${info.phone}`;

    const webinfo = (
      <svg
        width="1em"
        height="1em"
        viewBox="0 0 16 16"
        class="bi bi-info-circle"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
        />
        <path d="M8.93 6.588l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588z" />
        <circle cx="8" cy="4.5" r="1" />
      </svg>
    );

    const beer = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path d="M11.793 1.576c1.255 0 2.319.82 2.684 1.955.214-.082.447-.126.689-.126 1.074 0 1.944.871 1.944 1.944s-.871 1.944-1.944 1.944c-.626 0-1.183-.296-1.539-.756-.493.423-1.134.679-1.835.679-.884 0-1.673-.408-2.19-1.045-.424.497-1.056.813-1.761.813-.604 0-1.155-.231-1.567-.611-.354.487-.927.804-1.575.804-2.981 0-2.721-3.889 0-3.889.398 0 .769.12 1.077.326.383-.751 1.164-1.266 2.065-1.266.591 0 1.131.222 1.541.586.493-.813 1.389-1.358 2.411-1.358zm0-1.576c-.971 0-1.945.322-2.747.964-1.29-.42-2.746-.145-3.795.792-2.148-.339-4.251 1.056-4.251 3.669 0 1.941 1.758 3.328 3.699 3.328.613 0 1.209-.162 1.731-.457.998.388 2.127.35 3.108-.126 1.166.698 2.638.832 3.957.278.505.273 1.077.42 1.672.42 1.941 0 3.521-1.579 3.521-3.521 0-1.874-1.472-3.411-3.32-3.515-.768-1.067-2.056-1.832-3.575-1.832zm-2.793 20h-2v-10.072c.604.197 1.479.176 2-.144v10.216zm8 1.224v-11.375c-.619.235-1.299.34-2 .292v11.083c0 .273.019.538.084.791h-10.168c.064-.253.084-.518.084-.791v-11.21c-.671.067-1.331-.012-1.97-.232v11.442c0 .664-.366 1.203-1.03 1.203v1.573h16v-1.573c-.664 0-1-.539-1-1.203zm2.851-12.224h-1.851v2h1.492c2.416 0 1.663 4.425-1.492 6.255v2.16c3.209-1.213 5-4.424 5-6.963 0-1.918-1.005-3.452-3.149-3.452z" />
      </svg>
    );

    const phone = (
      <svg
        width="1em"
        height="1em"
        viewBox="0 0 16 16"
        class="bi bi-telephone"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
        />
      </svg>
    );

    const globe = (
      <svg
        width="1em"
        height="1em"
        viewBox="0 0 16 16"
        class="bi bi-globe"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4H2.255a7.025 7.025 0 0 1 3.072-2.472 6.7 6.7 0 0 0-.597.933c-.247.464-.462.98-.64 1.539zm-.582 3.5h-2.49c.062-.89.291-1.733.656-2.5H3.82a13.652 13.652 0 0 0-.312 2.5zM4.847 5H7.5v2.5H4.51A12.5 12.5 0 0 1 4.846 5zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5H7.5V11H4.847a12.5 12.5 0 0 1-.338-2.5zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12H7.5v2.923c-.67-.204-1.335-.82-1.887-1.855A7.97 7.97 0 0 1 5.145 12zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11H1.674a6.958 6.958 0 0 1-.656-2.5h2.49c.03.877.138 1.718.312 2.5zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12h2.355a7.967 7.967 0 0 1-.468 1.068c-.552 1.035-1.218 1.65-1.887 1.855V12zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5h-2.49A13.65 13.65 0 0 0 12.18 5h2.146c.365.767.594 1.61.656 2.5zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4H8.5V1.077c.67.204 1.335.82 1.887 1.855.173.324.33.682.468 1.068z"
        />
      </svg>
    );
    return (
      <div className="popup">
        <div>
          <h4 id="popup-title">{displayName}</h4>
          <div className="popup-info">
            <Link
              to={`brewery/${info.id}`}
              id="info"
              favorites={this.props.favorites}
            >
              <span id="icons">{webinfo}</span> more info
            </Link>
            <br />

            <span id="icons">{phone}</span>
            <a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
            <br />

            <a target="_new" href={website}>
              <span id="icons">{globe}</span>
              {website}
            </a>
          </div>
          <button
            className={
              this.props.favorites.some(
                (b) => b.brewery.brewery_name === displayName
              )
                ? "submit yellow"
                : "submit red"
            }
            onClick={(e) => this.props.addFavorite(e, info)}
          >
            {beer}
          </button>
        </div>
      </div>
    );
  }
}
