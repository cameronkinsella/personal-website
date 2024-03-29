import React from 'react';
import '../App.scss';
import { ProjectBlock } from '../components/ProjectBlock'
import { faArrowLeft, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useHistory } from 'react-router-dom';

import mailstorm from '../assets/thumbnails/mailstorm.jpeg'
import sudoku from '../assets/thumbnails/seppuku-sudoku.png'
import suspendont from '../assets/thumbnails/suspendont.png'
import tronBot from '../assets/thumbnails/tron-bot.png'


function Projects() {
  let history = useHistory();

  const goToHome = () => {
    window.scrollTo({ top: 0, behavior: 'auto' });
    history.push("/");
  };

  return (
    <div className={'App'}>
      <header className={'App-header'}>
        <h1 style={{ fontWeight: 200 }}>Projects</h1>
        <p>
          A list of all my major projects
        </p>
        <FontAwesomeIcon icon={faChevronDown} className={'chevron1'}/>
        <div className={'backButton'}>
          <div className={'backButtonIcon'} onClick={goToHome}
               style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <FontAwesomeIcon icon={faArrowLeft} size={'2x'}/>
          </div>
          <p className={'backButtonText'}>Back</p>
        </div>
      </header>
      <div>
        <div className={'App-body'}>
          <ProjectBlock title={'Manga Translator'} link={'https://github.com/cameronkinsella/manga-translator'}
                        color={'black'} src='https://raw.githubusercontent.com/cameronkinsella/manga-translator/master/images/example-translation.gif' ratio={'74.1'} desc={
            <p>An OCR and translation tool for translating text in images. Supports a wide variety of languages. The application consists of a cross-platform high-performant GUI made entirely in <b>Go</b>.</p>
          } tech={
            ['Go']
          }/>
          <ProjectBlock title={'Tron bot'} link={'https://github.com/uwaterloo-tron/discord-bot/'}
                        color={'#565656'} src={tronBot} ratio={'74.1'} desc={
            <p>A Discord bot used by the UWaterloo Mechatronics Engineering 2024 Discord server.<br/><br/>
              Comprehensive documentation on how to contribute was created to help students get involved with
              development. <b>Docker</b> is used to simplify local testing and reduce risk in production.
            </p>
          } tech={
            ['Python', 'Docker', 'Google Cloud Platform']
          }/>
          <ProjectBlock title={'Sudoku Solver'} link={'https://github.com/cameronkinsella/seppuku-sudoku'}
                        color={'black'} src={sudoku} ratio={'74.1'} desc={
            <p>A Sudoku solver which uses computer vision to solve any game of Sudoku from just a picture.<br/><br/>Users
              can upload an image of a Sudoku game to the serverless backend. <b>OpenCV</b> is used to extract each tile
              from the board and a neural network built using <b>PyTorch</b> is used to identify each tile. Using
              backtracking, the board is solved and sent back to the user. A manual input option is available as well.</p>
          } tech={
            ['Python', 'OpenCV', 'PyTorch', 'React.js', 'Google Cloud Platform']
          }/>
          <ProjectBlock title={'Mailstorm'} link={'https://devpost.com/software/mailstorm'}
                        color={'black'} src={mailstorm} ratio={'75'} desc={
            <p>Mailstorm is a smart mailbox hack which won first place at NewHacks 2020.<br/><br/>It detects when new
              mail arrives and uses <b>OpenCV</b> to scrape all the characters from the envelope. It then identifies the
              characters using a neural network built using <b>PyTorch</b>, and sends the information of the mail to a
              mobile and web app</p>
          } tech={
            ['Python', 'OpenCV', 'PyTorch', 'PHP', 'Google Cloud Platform']
          }/>
          <ProjectBlock title={`Suspendon't`} link={'https://github.com/cameronkinsella/suspendont'}
                        color={'#565656'} src={suspendont} ratio={'65.45'} desc={
            <p>Suspendon't is a mobile and web app for tracking when your Twitter friends are suspended or delete their
              account.<br/><br/> The mobile app was built using <b>React Native</b> and is functional on both
              iOS and Android. The web app was build using <b>React</b>. A Node backend is used for communicating with
              the Twitter APIs and storing user data in a database for future visits. Cloud Firestore is used for the
              database.</p>
          } tech={
            ['Node.js', 'React-Native', 'React.js', 'Google Cloud Platform']
          }/>
        </div>
      </div>
    </div>
  );
}

export default Projects
