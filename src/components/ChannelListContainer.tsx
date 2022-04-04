import React from 'react';
import { ChannelList, useChatContext } from 'stream-chat-react';
import Cookies from 'universal-cookie';

import { ChannelSearch, TeamChannelList, TeamChannelPreview } from '.';

import Icon from '../assets/icon.png';
import LogoutIcon from '../assets/logout.png';

function SideBar() {
  <div className="channel-list__sidebar">
    <div className="icon1">
      <div className="icon1__inner">
        <img src={Icon} alt="Icon" width={30} />
      </div>
    </div>
    <div className="icon2">
      <div className="icon2__inner">
        <img src={LogoutIcon} alt="Logout" width={30} />
      </div>
    </div>
  </div>;
}

function ChannelListContainer() {
  return (
    <div>ChannelListContainer</div>
  );
}

export default ChannelListContainer;
