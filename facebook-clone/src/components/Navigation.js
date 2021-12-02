import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const Navigation = () => {
  const { pathname } = useLocation();
  return (
    <div className="navigation">
      <NavLink to="/" exact className="logoNav logo">
        <svg viewBox="0 0 50 50">
          <path d="M 25 1.0507812 C 24.7825 1.0507812 24.565859 1.1197656 24.380859 1.2597656 L 1.3808594 19.210938 C 0.95085938 19.550938 0.8709375 20.179141 1.2109375 20.619141 C 1.5509375 21.049141 2.1791406 21.129062 2.6191406 20.789062 L 4 19.710938 L 4 46 C 4 46.55 4.45 47 5 47 L 19 47 L 19 29 L 31 29 L 31 47 L 45 47 C 45.55 47 46 46.55 46 46 L 46 19.710938 L 47.380859 20.789062 C 47.570859 20.929063 47.78 21 48 21 C 48.3 21 48.589063 20.869141 48.789062 20.619141 C 49.129063 20.179141 49.049141 19.550938 48.619141 19.210938 L 25.619141 1.2597656 C 25.434141 1.1197656 25.2175 1.0507812 25 1.0507812 z M 35 5 L 35 6.0507812 L 41 10.730469 L 41 5 L 35 5 z" />
        </svg>
        <div className="navigation__home__tooltip tooltip">Accueil</div>
      </NavLink>

      {/* <NavLink to="/Profil" exact className="logoNav logo"> */}
      <NavLink
        to="/friends"
        className="logoNav_friends logo"
        isActive={() =>
          [
            "/friends",
            "/friends/requests",
            "/friends/suggestions",
            "/friends/list",
          ].includes(pathname)
        }
      >
        <svg viewBox="0 0 511.99987 511">
          <path d="m511.472656 261.550781c-8.453125-47.609375-40.046875-85.835937-81.707031-103.566406 18.488281-15.503906 30.296875-38.980469 30.296875-65.207031 0-46.582032-37.234375-84.480469-83.003906-84.480469-45.769532 0-83.003906 37.894531-83.003906 84.480469 0 26.242187 11.820312 49.726562 30.328124 65.234375-6.90625 2.945312-13.597656 6.460937-19.988281 10.558593-16.105469 10.328126-29.855469 23.929688-40.453125 39.859376-10.785156-7.164063-22.382812-13.125-34.609375-17.699219 26.277344-18.996094 43.457031-50.230469 43.457031-85.476563 0-57.761718-46.136718-104.753906-102.847656-104.753906-56.710937 0-102.847656 46.992188-102.847656 104.753906 0 35.246094 17.179688 66.480469 43.457031 85.476563-55.921875 20.921875-98.8125 70.675781-109.9375 133.316406-2.054687 11.582031 1.101563 23.394531 8.652344 32.410156 7.480469 8.925781 18.394531 14.042969 29.945313 14.042969h261.460937c11.550781 0 22.464844-5.117188 29.945313-14.042969 7.554687-9.015625 10.707031-20.828125 8.652343-32.410156-1.371093-7.726563-3.230469-15.253906-5.53125-22.554687h144.515625c9.945313 0 19.34375-4.40625 25.78125-12.085938 6.492188-7.746094 9.203125-17.902344 7.4375-27.855469zm-187.417968-168.773437c0-30.042969 23.777343-54.480469 53.003906-54.480469 29.226562 0 53.003906 24.4375 53.003906 54.480469 0 30.039062-23.777344 54.476562-53.003906 54.476562-29.226563 0-53.003906-24.4375-53.003906-54.476562zm-226.960938 12.476562c0-41.21875 32.679688-74.753906 72.847656-74.753906 40.167969 0 72.851563 33.535156 72.851563 74.753906s-32.683594 74.753906-72.851563 74.753906c-40.167968 0-72.847656-33.535156-72.847656-74.753906zm210.53125 231.933594c-1.039062 1.238281-3.320312 3.3125-6.953125 3.3125h-261.460937c-3.632813 0-5.914063-2.074219-6.953126-3.3125-1.078124-1.289062-2.789062-4.03125-2.105468-7.898438 12.273437-69.113281 71.0625-119.28125 139.789062-119.28125 68.726563 0 127.519532 50.167969 139.789063 119.28125.6875 3.867188-1.023438 6.609376-2.105469 7.898438zm173.417969-67.050781c-.425781.507812-1.351563 1.355469-2.785157 1.355469h-157.128906c-8.875-16.628907-20.273437-31.546876-33.644531-44.273438 19.539063-31.082031 52.933594-49.964844 89.574219-49.964844 51.558594 0 95.660156 37.65625 104.875 89.542969.289062 1.636719-.433594 2.796875-.890625 3.339844zm0 0" />
        </svg>
        <div className="navigation__friends__tooltip tooltip">Amis</div>
      </NavLink>
      {/* </NavLink> */}

      <NavLink
        to="/watch"
        isActive={() => ["/watch"].includes(pathname)}
        className="logoNav_play logo"
      >
        <svg viewBox="0 0 512 512">
          <path
            d="M243.655,133.36c-12.215-7.087-26.812-7.111-39.051-0.064C192.328,140.365,185,153.055,185,167.242v99.638
				c0,14.186,7.328,26.877,19.603,33.945c6.101,3.513,12.785,5.269,19.471,5.269c6.726,0,13.454-1.778,19.58-5.333l85.853-49.819
				C341.713,243.86,349,231.195,349,217.061c0-14.134-7.287-26.8-19.492-33.881L243.655,133.36z M225,265.339v-96.557l83.198,48.279
				L225,265.339z"
          />
          <path
            d="M492,236.061c11.046,0,20-8.954,20-20v-100c0-44.112-35.888-80-80-80H80c-44.112,0-80,35.888-80,80v200
				c0,44.112,35.888,80,80,80h156v39.878h-70c-11.046,0-20,8.954-20,20c0,11.046,8.954,20,20,20h180c11.046,0,20-8.954,20-20
				c0-11.046-8.954-20-20-20h-70v-39.878h156c44.112,0,80-35.888,80-80c0-11.046-8.954-20-20-20c-11.046,0-20,8.954-20,20
				c0,22.056-17.944,40-40,40H80c-22.056,0-40-17.944-40-40v-200c0-22.056,17.944-40,40-40h352c22.056,0,40,17.944,40,40v100
				C472,227.107,480.954,236.061,492,236.061z"
          />
        </svg>
        <div className="navigation__play__tooltip tooltip">Watch</div>
      </NavLink>

      <div className="logoNav_market logo">
        <svg viewBox="0 0 203.125 203.125">
          <path
            d="M203.087,68.879c0.026-0.253,0.039-0.509,0.039-0.768c0-1.078-0.228-2.104-0.637-3.03
		l-16.162-45.477c-3.112-8.758-11.448-14.642-20.742-14.642H37.521c-9.294,0-17.63,5.884-20.742,14.642L0.433,65.599
		c-0.011,0.03-0.016,0.061-0.026,0.091c-0.073,0.214-0.135,0.432-0.189,0.654c-0.014,0.056-0.031,0.112-0.043,0.168
		c-0.06,0.276-0.108,0.556-0.137,0.842c-0.001,0.009,0,0.018-0.001,0.027C0.014,67.621,0,67.864,0,68.111
		c0,0.034,0.002,0.067,0.003,0.101c0,0.026,0.001,0.052,0.002,0.078c0.049,8.421,3.575,17.322,9.548,23.881v82.739
		c0,12.822,10.432,23.254,23.254,23.254h15.986h30.234h91.272c12.822,0,23.254-10.432,23.254-23.254V92.17
		C199.387,85.764,202.881,77.125,203.087,68.879z M186.496,75.611c-2.594,6.186-8.056,11.513-14.403,11.513
		c-7.266,0-13.408-4.869-15.358-11.513H186.496z M30.913,24.627c0.992-2.79,3.647-4.665,6.608-4.665h128.063
		c2.961,0,5.617,1.875,6.608,4.665l12.788,35.983H18.125L30.913,24.627z M140.424,75.611c-1.951,6.644-8.092,11.513-15.358,11.513
		s-13.408-4.869-15.358-11.513H140.424z M93.398,75.611c-1.951,6.644-8.092,11.513-15.358,11.513s-13.408-4.869-15.358-11.513
		H93.398z M46.371,75.611c-1.951,6.644-8.092,11.513-15.358,11.513c-6.348,0-11.809-5.327-14.403-11.513H46.371z M56.292,183.163
		v-46.817h15.234v46.817H56.292z M170.299,183.163H86.526v-54.317c0-4.143-3.358-7.5-7.5-7.5H48.792c-4.142,0-7.5,3.357-7.5,7.5
		v54.317h-8.486c-4.551,0-8.254-3.703-8.254-8.254v-73.562c2.062,0.503,4.219,0.776,6.46,0.776c9.395,0,17.821-4.205,23.513-10.825
		c5.692,6.62,14.118,10.825,23.513,10.825s17.821-4.205,23.513-10.825c5.692,6.62,14.118,10.825,23.513,10.825
		s17.821-4.205,23.513-10.825c5.692,6.62,14.118,10.825,23.513,10.825c2.242,0,4.399-0.273,6.46-0.776v73.562
		C178.553,179.46,174.85,183.163,170.299,183.163z"
          />
        </svg>
        <div className="navigation__market__tooltip tooltip">Marketplace</div>
      </div>

      <div className="logoNav_group logo">
        <svg viewBox="0 0 548.169 548.169">
          <path
            d="M109.634,164.452c20.179,0,37.402-7.135,51.674-21.411c14.277-14.275,21.416-31.503,21.416-51.678
			c0-20.173-7.139-37.401-21.416-51.678c-14.272-14.275-31.496-21.414-51.674-21.414c-20.177,0-37.401,7.139-51.676,21.414
			C43.684,53.962,36.545,71.186,36.545,91.363c0,20.179,7.139,37.403,21.413,51.678C72.233,157.313,89.457,164.452,109.634,164.452z
			"
          />
          <path
            d="M196.569,278.519c21.413,21.406,47.248,32.114,77.516,32.114c30.269,0,56.103-10.708,77.515-32.114
			c21.409-21.42,32.117-47.258,32.117-77.52c0-30.264-10.708-56.101-32.117-77.515c-21.412-21.414-47.246-32.121-77.515-32.121
			c-30.268,0-56.105,10.709-77.516,32.121c-21.411,21.411-32.12,47.248-32.12,77.515S175.158,257.102,196.569,278.519z"
          />
          <path
            d="M438.543,164.452c20.17,0,37.397-7.135,51.671-21.411c14.274-14.275,21.409-31.503,21.409-51.678
			c0-20.173-7.135-37.401-21.409-51.678c-14.273-14.275-31.501-21.414-51.671-21.414c-20.184,0-37.407,7.139-51.682,21.414
			c-14.271,14.277-21.409,31.501-21.409,51.678c0,20.179,7.139,37.403,21.409,51.678
			C401.136,157.313,418.359,164.452,438.543,164.452z"
          />
          <path
            d="M512.763,164.456c-1.136,0-5.276,1.999-12.415,5.996c-7.132,3.999-16.416,8.044-27.833,12.137
			c-11.416,4.089-22.747,6.136-33.972,6.136c-12.758,0-25.406-2.187-37.973-6.567c0.945,7.039,1.424,13.322,1.424,18.842
			c0,26.457-7.71,50.819-23.134,73.089c30.841,0.955,56.056,13.134,75.668,36.552h38.256c15.605,0,28.739-3.863,39.396-11.57
			c10.657-7.703,15.989-18.986,15.989-33.83C548.172,198.047,536.376,164.452,512.763,164.456z"
          />
          <path
            d="M470.096,395.284c-1.999-11.136-4.524-21.464-7.57-30.978c-3.046-9.521-7.139-18.794-12.271-27.836
			c-5.141-9.034-11.044-16.748-17.706-23.127c-6.667-6.379-14.805-11.464-24.414-15.276c-9.609-3.806-20.225-5.708-31.833-5.708
			c-1.906,0-5.996,2.047-12.278,6.14c-6.283,4.089-13.224,8.665-20.841,13.702c-7.615,5.037-17.789,9.609-30.55,13.702
			c-12.762,4.093-25.608,6.14-38.544,6.14c-12.941,0-25.791-2.047-38.544-6.14c-12.756-4.093-22.936-8.665-30.55-13.702
			c-7.616-5.037-14.561-9.613-20.841-13.702c-6.283-4.093-10.373-6.14-12.279-6.14c-11.609,0-22.22,1.902-31.833,5.708
			c-9.613,3.812-17.749,8.897-24.41,15.276c-6.667,6.372-12.562,14.093-17.705,23.127c-5.137,9.042-9.229,18.315-12.275,27.836
			c-3.045,9.514-5.564,19.842-7.566,30.978c-2,11.136-3.331,21.505-3.997,31.121c-0.667,9.613-0.999,19.466-0.999,29.554
			c0,22.836,6.945,40.874,20.839,54.098c13.899,13.223,32.363,19.842,55.389,19.842h249.535c23.028,0,41.49-6.619,55.392-19.842
			c13.894-13.224,20.841-31.262,20.841-54.098c0-10.088-0.335-19.938-0.992-29.554C473.418,416.789,472.087,406.419,470.096,395.284
			z"
          />
          <path
            d="M169.303,274.088c-15.418-22.27-23.125-46.632-23.122-73.089c0-5.52,0.477-11.799,1.427-18.842
			c-12.564,4.377-25.221,6.567-37.974,6.567c-11.23,0-22.552-2.046-33.974-6.136c-11.417-4.093-20.699-8.138-27.834-12.137
			c-7.138-3.997-11.281-5.996-12.422-5.996C11.801,164.456,0,198.051,0,265.24c0,14.844,5.33,26.127,15.987,33.83
			c10.66,7.707,23.794,11.563,39.397,11.563h38.26C113.251,287.222,138.467,275.042,169.303,274.088z"
          />
        </svg>
        <div className="navigation__group__tooltip tooltip">Groupe</div>
      </div>
    </div>
  );
};

export default Navigation;
