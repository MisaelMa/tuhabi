/* eslint-disable jsdoc/require-jsdoc */
import React from 'react';

import {
  ComponentMeta,
  ComponentStory,
} from '@ammc/heft-storybook-web';

import Icon from './Icon';
import IIconProps from './IIcon';

// const Template: Story = () => <Icon className="arrowUp" />;

export default {
  component: Icon,
  title: 'components/Icons',
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (
  args: IIconProps
): JSX.Element => <Icon {...args} />;

export const alarm = Template.bind({});
alarm.args = {
  iconName: 'alarm',
};

export const alarmOutline = Template.bind({});
alarmOutline.args = {
  iconName: 'alarmOutline',
};

export const arrowCircleLeft = Template.bind({});
arrowCircleLeft.args = {
  iconName: 'arrowCircleLeft',
};

export const arrowCircleLeftOutline = Template.bind({});
arrowCircleLeftOutline.args = {
  iconName: 'arrowCircleLeftOutline',
};

export const arrowCircleRight = Template.bind({});
arrowCircleRight.args = {
  iconName: 'arrowCircleRight',
};

export const arrowCircleRightOutline = Template.bind({});
arrowCircleRightOutline.args = {
  iconName: 'arrowCircleRightOutline',
};

export const airPlay = Template.bind({});
airPlay.args = {
  iconName: 'airPlay',
};

export const airPlayOutline = Template.bind({});
airPlayOutline.args = {
  iconName: 'airPlayOutline',
};

export const arrowClockwise = Template.bind({});
arrowClockwise.args = {
  iconName: 'arrowClockwise',
};

export const arrowClockwiseOutline = Template.bind({});
arrowClockwiseOutline.args = {
  iconName: 'arrowClockwiseOutline',
};

export const arrowDown = Template.bind({});
arrowDown.args = {
  iconName: 'arrowDown',
};

export const arrowUp = Template.bind({});
arrowUp.args = {
  iconName: 'arrowUp',
};

export const arrowLeft = Template.bind({});
arrowLeft.args = {
  iconName: 'arrowLeft',
};

export const arrowLeftOutline = Template.bind({});
arrowLeftOutline.args = {
  iconName: 'arrowLeftOutline',
};

export const arrowRight = Template.bind({});
arrowRight.args = {
  iconName: 'arrowRight',
};

export const arrowRightOutline = Template.bind({});
arrowRightOutline.args = {
  iconName: 'arrowRightOutline',
};

export const arrowsDownUp = Template.bind({});
arrowsDownUp.args = {
  iconName: 'arrowsDownUp',
};

export const arrowsDownUpOutline = Template.bind({});
arrowsDownUpOutline.args = {
  iconName: 'arrowsDownUpOutline',
};

export const arrowsInSimple = Template.bind({});
arrowsInSimple.args = {
  iconName: 'arrowsInSimple',
};

export const arrowsInSimpleOutline = Template.bind({});
arrowsInSimpleOutline.args = {
  iconName: 'arrowsInSimpleOutline',
};

export const arrowsLeftRight = Template.bind({});
arrowsLeftRight.args = {
  iconName: 'arrowsLeftRight',
};

export const arrowsLeftRightOutline = Template.bind({});
arrowsLeftRightOutline.args = {
  iconName: 'arrowsLeftRightOutline',
};

export const arrowsOutSimple = Template.bind({});
arrowsOutSimple.args = {
  iconName: 'arrowsOutSimple',
};

export const arrowsOutSimpleOutline = Template.bind({});
arrowsOutSimpleOutline.args = {
  iconName: 'arrowsOutSimpleOutline',
};

export const baseball = Template.bind({});
baseball.args = {
  iconName: 'baseball',
};

export const baseballOutline = Template.bind({});
baseballOutline.args = {
  iconName: 'baseballOutline',
};

export const basketball = Template.bind({});
basketball.args = {
  iconName: 'basketball',
};

export const basketballOutline = Template.bind({});
basketballOutline.args = {
  iconName: 'basketballOutline',
};

export const bell = Template.bind({});
bell.args = {
  iconName: 'bell',
};

export const bellOutline = Template.bind({});
bellOutline.args = {
  iconName: 'bellOutline',
};

export const bellRinging = Template.bind({});
bellRinging.args = {
  iconName: 'bellRinging',
};

export const bellRingingOutline = Template.bind({});
bellRingingOutline.args = {
  iconName: 'bellRingingOutline',
};

export const bellSlash = Template.bind({});
bellSlash.args = {
  iconName: 'bellSlash',
};

export const bellSlashOutline = Template.bind({});
bellSlashOutline.args = {
  iconName: 'bellSlashOutline',
};

export const calendar = Template.bind({});
calendar.args = {
  iconName: 'calendar',
};

export const calendarOutline = Template.bind({});
calendarOutline.args = {
  iconName: 'calendarOutline',
};

export const calendarBlank = Template.bind({});
calendarBlank.args = {
  iconName: 'calendarBlank',
};

export const calendarBlankOutline = Template.bind({});
calendarBlankOutline.args = {
  iconName: 'calendarBlankOutline',
};

export const calendarCheck = Template.bind({});
calendarCheck.args = {
  iconName: 'calendarCheck',
};

export const calendarCheckOutline = Template.bind({});
calendarCheckOutline.args = {
  iconName: 'calendarCheckOutline',
};

export const calendarPlus = Template.bind({});
calendarPlus.args = {
  iconName: 'calendarPlus',
};

export const calendarPlusOutline = Template.bind({});
calendarPlusOutline.args = {
  iconName: 'calendarPlusOutline',
};

export const camera = Template.bind({});
camera.args = {
  iconName: 'camera',
};

export const cameraOutline = Template.bind({});
cameraOutline.args = {
  iconName: 'cameraOutline',
};

export const caretDown = Template.bind({});
caretDown.args = {
  iconName: 'caretDown',
};

export const caretDownOutline = Template.bind({});
caretDownOutline.args = {
  iconName: 'caretDownOutline',
};
export const caretLeft = Template.bind({});
caretLeft.args = {
  iconName: 'caretLeft',
};

export const caretLeftOutline = Template.bind({});
caretLeftOutline.args = {
  iconName: 'caretLeftOutline',
};
export const caretRight = Template.bind({});
caretRight.args = {
  iconName: 'caretRight',
};
export const caretRightOutline = Template.bind({});
caretRightOutline.args = {
  iconName: 'caretRightOutline',
};
export const caretUp = Template.bind({});
caretUp.args = {
  iconName: 'caretUp',
};
export const caretUpOutline = Template.bind({});
caretUpOutline.args = {
  iconName: 'caretUpOutline',
};
export const chartline = Template.bind({});
chartline.args = {
  iconName: 'chartline',
};
export const check = Template.bind({});
check.args = {
  iconName: 'check',
};
export const checkCircle = Template.bind({});
checkCircle.args = {
  iconName: 'checkCircle',
};
export const checkCircleOutline = Template.bind({});
checkCircleOutline.args = {
  iconName: 'checkCircleOutline',
};
export const clock = Template.bind({});
clock.args = {
  iconName: 'clock',
};
export const clockOutline = Template.bind({});
clockOutline.args = {
  iconName: 'clockOutline',
};
export const clockClockwise = Template.bind({});
clockClockwise.args = {
  iconName: 'clockClockwise',
};
export const clockCounterClockwise = Template.bind({});
clockCounterClockwise.args = {
  iconName: 'clockCounterClockwise',
};
export const closedCaptioning = Template.bind({});
closedCaptioning.args = {
  iconName: 'closedCaptioning',
};
export const closedCaptioningOutline = Template.bind({});
closedCaptioningOutline.args = {
  iconName: 'closedCaptioningOutline',
};
export const closedCaptioningSlash = Template.bind({});
closedCaptioningSlash.args = {
  iconName: 'closedCaptioningSlash',
};
export const cornersIn = Template.bind({});
cornersIn.args = {
  iconName: 'cornersIn',
};
export const cornersInOutline = Template.bind({});
cornersInOutline.args = {
  iconName: 'cornersInOutline',
};
export const cornersOut = Template.bind({});
cornersOut.args = {
  iconName: 'cornersOut',
};
export const cornersOutOutline = Template.bind({});
cornersOutOutline.args = {
  iconName: 'cornersOutOutline',
};
export const dotsThreeOutline = Template.bind({});
dotsThreeOutline.args = {
  iconName: 'dotsThreeOutline',
};
export const dotsNineOutline = Template.bind({});
dotsNineOutline.args = {
  iconName: 'dotsNineOutline',
};

export const envelope = Template.bind({});
envelope.args = {
  iconName: 'envelope',
};
export const envelopeOutline = Template.bind({});
envelopeOutline.args = {
  iconName: 'envelopeOutline',
};
export const facebookLogo = Template.bind({});
facebookLogo.args = {
  iconName: 'facebookLogo',
};
export const facebookLogoOutline = Template.bind({});
facebookLogoOutline.args = {
  iconName: 'facebookLogoOutline',
};
export const fastForward = Template.bind({});
fastForward.args = {
  iconName: 'fastForward',
};
export const fastForwardOutline = Template.bind({});
fastForwardOutline.args = {
  iconName: 'fastForwardOutline',
};
export const football = Template.bind({});
football.args = {
  iconName: 'football',
};
export const footballOutline = Template.bind({});
footballOutline.args = {
  iconName: 'footballOutline',
};
export const gearSix = Template.bind({});
gearSix.args = {
  iconName: 'gearSix',
};
export const gearSixOutline = Template.bind({});
gearSixOutline.args = {
  iconName: 'gearSixOutline',
};
export const house = Template.bind({});
house.args = {
  iconName: 'house',
};
export const houseOutline = Template.bind({});
houseOutline.args = {
  iconName: 'houseOutline',
};
export const image = Template.bind({});
image.args = {
  iconName: 'image',
};
export const imageOutline = Template.bind({});
imageOutline.args = {
  iconName: 'imageOutline',
};
export const instagramLogo = Template.bind({});
instagramLogo.args = {
  iconName: 'instagramLogo',
};
export const instagramLogoOutline = Template.bind({});
instagramLogoOutline.args = {
  iconName: 'instagramLogoOutline',
};
export const magnifyingGlass = Template.bind({});
magnifyingGlass.args = {
  iconName: 'magnifyingGlass',
};
export const magnifyingGlassOutline = Template.bind({});
magnifyingGlassOutline.args = {
  iconName: 'magnifyingGlassOutline',
};
export const medal = Template.bind({});
medal.args = {
  iconName: 'medal',
};
export const medalOutline = Template.bind({});
medalOutline.args = {
  iconName: 'medalOutline',
};
export const menu = Template.bind({});
menu.args = {
  iconName: 'menu',
};
export const monitorPlay = Template.bind({});
monitorPlay.args = {
  iconName: 'monitorPlay',
};
export const monitorPlayOutline = Template.bind({});
monitorPlayOutline.args = {
  iconName: 'monitorPlayOutline',
};
export const nut = Template.bind({});
nut.args = {
  iconName: 'nut',
};
export const nutOutline = Template.bind({});
nutOutline.args = {
  iconName: 'nutOutline',
};
export const paperPlaneTilt = Template.bind({});
paperPlaneTilt.args = {
  iconName: 'paperPlaneTilt',
};
export const paperPlaneTiltOutline = Template.bind({});
paperPlaneTiltOutline.args = {
  iconName: 'paperPlaneTiltOutline',
};
export const pause = Template.bind({});
pause.args = {
  iconName: 'pause',
};
export const pauseOutline = Template.bind({});
pauseOutline.args = {
  iconName: 'pauseOutline',
};
export const pinterestLogo = Template.bind({});
pinterestLogo.args = {
  iconName: 'pinterestLogo',
};
export const pinterestLogoOutline = Template.bind({});
pinterestLogoOutline.args = {
  iconName: 'pinterestLogoOutline',
};
export const play = Template.bind({});
play.args = {
  iconName: 'play',
};
export const playOutline = Template.bind({});
playOutline.args = {
  iconName: 'playOutline',
};
export const queue = Template.bind({});
queue.args = {
  iconName: 'queue',
};
export const queueOutline = Template.bind({});
queueOutline.args = {
  iconName: 'queueOutline',
};
export const rewind = Template.bind({});
rewind.args = {
  iconName: 'rewind',
};
export const rewindOutline = Template.bind({});
rewindOutline.args = {
  iconName: 'rewindOutline',
};
export const screencast = Template.bind({});
screencast.args = {
  iconName: 'screencast',
};
export const screencastOutline = Template.bind({});
screencastOutline.args = {
  iconName: 'screencastOutline',
};
export const skipBack = Template.bind({});
skipBack.args = {
  iconName: 'skipBack',
};
export const skipBackOutline = Template.bind({});
skipBackOutline.args = {
  iconName: 'skipBackOutline',
};
export const skipForward = Template.bind({});
skipForward.args = {
  iconName: 'skipForward',
};
export const skipForwardOutline = Template.bind({});
skipForwardOutline.args = {
  iconName: 'skipForwardOutline',
};
export const sliders = Template.bind({});
sliders.args = {
  iconName: 'sliders',
};
export const slidersOutline = Template.bind({});
slidersOutline.args = {
  iconName: 'slidersOutline',
};
export const slidersHorizontal = Template.bind({});
slidersHorizontal.args = {
  iconName: 'slidersHorizontal',
};
export const slidersHorizontalOutline = Template.bind({});
slidersHorizontalOutline.args = {
  iconName: 'slidersHorizontalOutline',
};
export const soccerBall = Template.bind({});
soccerBall.args = {
  iconName: 'soccerBall',
};
export const soccerBallOutline = Template.bind({});
soccerBallOutline.args = {
  iconName: 'soccerBallOutline',
};
export const speakerHigh = Template.bind({});
speakerHigh.args = {
  iconName: 'speakerHigh',
};
export const speakerHighOutline = Template.bind({});
speakerHighOutline.args = {
  iconName: 'speakerHighOutline',
};
export const speakerLow = Template.bind({});
speakerLow.args = {
  iconName: 'speakerLow',
};
export const speakerLowOutline = Template.bind({});
speakerLowOutline.args = {
  iconName: 'speakerLowOutline',
};
export const speakerNone = Template.bind({});
speakerNone.args = {
  iconName: 'speakerNone',
};
export const speakerNoneOutline = Template.bind({});
speakerNoneOutline.args = {
  iconName: 'speakerNoneOutline',
};
export const speakerSlash = Template.bind({});
speakerSlash.args = {
  iconName: 'speakerSlash',
};
export const speakerSlashOutline = Template.bind({});
speakerSlashOutline.args = {
  iconName: 'speakerSlashOutline',
};
export const stop = Template.bind({});
stop.args = {
  iconName: 'stop',
};
export const stopOutline = Template.bind({});
stopOutline.args = {
  iconName: 'stopOutline',
};
export const strategy = Template.bind({});
strategy.args = {
  iconName: 'strategy',
};
export const subtitlesFill = Template.bind({});
subtitlesFill.args = {
  iconName: 'subtitlesFill',
};
export const subtitlesFillOutline = Template.bind({});
subtitlesFillOutline.args = {
  iconName: 'subtitlesFillOutline',
};
export const tennisBall = Template.bind({});
tennisBall.args = {
  iconName: 'tennisBall',
};
export const tennisBallOutline = Template.bind({});
tennisBallOutline.args = {
  iconName: 'tennisBallOutline',
};
export const tiktokLogo = Template.bind({});
tiktokLogo.args = {
  iconName: 'tiktokLogo',
};
export const tiktokLogoOutline = Template.bind({});
tiktokLogoOutline.args = {
  iconName: 'tiktokLogoOutline',
};
export const timer = Template.bind({});
timer.args = {
  iconName: 'timer',
};
export const timerOutline = Template.bind({});
timerOutline.args = {
  iconName: 'timerOutline',
};
export const trophy = Template.bind({});
trophy.args = {
  iconName: 'trophy',
};
export const trophyOutline = Template.bind({});
trophyOutline.args = {
  iconName: 'trophyOutline',
};
export const twitterLogo = Template.bind({});
twitterLogo.args = {
  iconName: 'twitterLogo',
};
export const twitterLogoOutline = Template.bind({});
twitterLogoOutline.args = {
  iconName: 'twitterLogoOutline',
};
export const user = Template.bind({});
user.args = {
  iconName: 'user',
};
export const userOutline = Template.bind({});
userOutline.args = {
  iconName: 'userOutline',
};
export const volleyball = Template.bind({});
volleyball.args = {
  iconName: 'volleyball',
};
export const whatsappLogo = Template.bind({});
whatsappLogo.args = {
  iconName: 'whatsappLogo',
};
export const whatsappLogoOutline = Template.bind({});
whatsappLogoOutline.args = {
  iconName: 'whatsappLogoOutline',
};
export const xCircle = Template.bind({});
xCircle.args = {
  iconName: 'xCircle',
};
export const xClose = Template.bind({});
xClose.args = {
  iconName: 'xClose',
};
export const youtubeLogo = Template.bind({});
youtubeLogo.args = {
  iconName: 'youtubeLogo',
};
export const youtubeLogoOutline = Template.bind({});
youtubeLogoOutline.args = {
  iconName: 'youtubeLogoOutline',
};
