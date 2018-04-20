import React from 'react';
import style from './styles/picture-share-save-tour.css';

var Save = (props) => {
  const emptyHeart = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAANHSURBVGhD7ZlJyE1RHMA/8xwW5iHFxlBsEEKJlZBhRQiJQsnGmAUlsjJsFBKSIiEyrChjpEjGIgsLypx5/P2O79Tnq89373v3fe8t7q9+vXdO75x7zr33TP9XlZOTk5OTU0YaY+u/X4uiTfVng9EBF+JJfI7f8Te+wlu4Efvj/2iGk/AwPsLPaB0f8R7uwHHYCDOnBa7EN+hFo9/wNf6skafHsAfWZjI+w5q//YRva+XpVRyNmdENr2C8wCmcjeZHvMvDcDv6dPzde7Th0hz3Y6zjJi7GXhjxZg3GtRg76w1ahUU/nS4YK32II7E+2uIetIxPzE6fqE7byRlYHy1xNcZX1xtUMFZ2Da3oAnbENMzHX2h5fYw1n0ASxqNjx/KLzCgEx4QV+CTam1EA69A6HAP1TQJ1MR29IXao5uucCO9+HNijzCgQ3+2zaGOK4SDall0hlQJfCwueDqniaFf9WQx90IH/AZ0UEuM6YUfmhFRlcAlt08SQSshTtFDPkKoMNqBtWhNSCfmCPsqmIVUZOGvZkZ0hlQAbbwE7U0n4mtsu16jEvEMLZbEhzIrlaJu2hlRC7qOFBoZUZbANbdOKkErIIbTQvJCqDK6jbRobUglZihY6ElLlpzO67/qK7uUS0x2dtTwreAYpN3F8HA+plJxBC7tfKiceEeK6NtWMtIxBC3tw6mRGmViCtuMuerQuiPNoJW7ayoE7i3h6nGZGofRFj6JWNMuMBqQJXkSv7cGsaOKj9Tww1IwGwiCE132Bqc8hdXEArdTxMsSMErMJvZ5TrmM1MzwDeECy8pc4CEvFevQ6ngrnmpE1rfAcxsc9ArPEGWkzxk64dpQMN5FxJnN3bIQkC1ytY6TFhbjgQEMajK7sQy+qW7CYc0s/vIPWZSxsCjYoPvofaAMuY29My0yMRwbDRQOwLExAB78NMeqSNFriq7QXLacGOdLGzTKnK8Z9me7G/+1QXYuMlflbN6XLsCQB60KwITYoRtaNstdePJ2VDIMaRvU3t7GSDm7/4Dt+A22oDTbiYQccP4ZdzXdcOc2mik+VA2cwOxDvvH8PuCPw+wPMev0pOcPxCdoB9W+FVKe7SsLT5VFcEFI5OTk5OYGqqj9XWeCu2RXOqAAAAABJRU5ErkJggg==';
  const filledHeart = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAIISURBVGhD7dm/S1VhHMfx2w/sB5i5WQ0F4tjQmiKETTaJQRTkEKg0OvVjqU2aBG1qEXQIbSgV7A+oqLWhCESzITdNsUJLq/eHPHCRL9fnnHvueR7hecMLRfR7nqvnnnueaykWi8ViMY8dxPH/n1ZV/c7HwmpEL2bwFVv4ixW8xyAuoFLHcBUTWMAGNOMHPmIEHTiA3DuKu/gGHXQvL9GC8rSwm1iC9TO7vUU7cusUNNQ6WCWb6IHS6TcL6/sq2cY9VP3XacIXWAdx8Qd38Krsa1nodMucTqd3sAb70I9M6TdpDfRFF4PTSJWuTq5P7CI9QapuwRrk2zqOwLlpWINCcAXOfYY1JAT34Vzyahuix3DqMKwBoRiFc7rUWUNCMATnPsEaEoIBOPcM1pAQXIZzt2EN8e0ntA1w7gx052kN8+kFUqfNkzXMp1QvhkltsIb5oh2ottaZmoI11IdOZO4sdKNmDS6S9vdVdw3a6VkHKMIctK3IpUewDlJr33EeuXUIRT9f9FZTF3KvDkVdkn9Dp3TN0oN5DuvgedHbSN2oebrNH4a1iGot4xIKrQ+/YC0oiw9ohpcuYh7WwtIYwwl4TQsYh7XAvaziOoLqBtZgLdjyGucQZFrYG1gLT+jS+gC6aASdFvgQyf9Oyi2iFfsqbQO08ORBPEUD9mUnMQm9BRuLxWKxnUqlfyGi206x1fChAAAAAElFTkSuQmCC';
  let currentHeart = '';

  if (props.image.saved) { 
    currentHeart = filledHeart;
  } else {
    currentHeart = emptyHeart;
  }

  return (
    <div><button className={style.save_button}><img className={style.save_image} src={currentHeart}/></button></div>
  );
};

export default Save;