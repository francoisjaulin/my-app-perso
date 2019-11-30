import React from 'react'
import { TwitterTimelineEmbed, 
    TwitterShareButton, 
    TwitterFollowButton, 
    TwitterHashtagButton, TwitterMentionButton, 
    TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';

import {
        LinkedinLogin,
        LinkedinProfile,
        LinkedinShare } from 'react-linkedin-plugins';

import ReactDOM from 'react-dom'
import LinkedinSDK from 'react-linkedin-sdk'

export default class Socialnetwork extends React.Component {
	render() {
        return(
            <div>
                <div className="divTwitter">
                    <TwitterTimelineEmbed 
                    sourceType="profile"
                    screenName="Francois_JAULIN"
                    options={{height: 400}}/>
                    <TwitterHashtagButton  tag={'patientsafety'}/>

                    <TwitterMentionButton 
                    screenName={'Francois_JAULIN'}/>
                    
                    <TwitterFollowButton
                    screenName={'Francois_JAULIN'}/>
                </div>
                
                <div className="divLinkedin">
                    <LinkedinSDK
                    clientId="123456789010"
                    fields=":(id,num-connections,picture-url)"
                    className={'className'}
                    loginButtonText={'Login with Linkedin'}
                    logoutButtonText={'Logout from Linkedin'}
                    buttonType={'button'}
                    getOAuthToken/>
                </div>
            </div>

            
            

            )
       

	}
}

