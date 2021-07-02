import { ChartBarIcon, CheckCircleIcon, LockClosedIcon, ShieldCheckIcon, EyeOffIcon } from '@heroicons/react/outline'
import { UserIcon, UserGroupIcon } from '@heroicons/react/solid'

const sections = [
    { 
      title: "Our Voting Services.", 
      color: "white", 
      gridCols: 2,
      children: [
        {
          color: "blue",
          icon: <CheckCircleIcon></CheckCircleIcon>,
          title: "Online Elections",
          body: "Send your voters an email with secure, single-use voting links that ensure only authorized voters can vote once."
        },
        {
          color: "blue",
          icon: <ChartBarIcon></ChartBarIcon>,
          title: "Automated Poll Count",
          body: "Count ranked Polls that you've already collectd your own vote collection."
        }
      ] 
    },
    { 
      title: "What you can do with us?", 
      color: "blue", 
      gridCols: 2,
      children: [
        {
          color: "white",
          icon: <UserGroupIcon></UserGroupIcon>,
          title: "Election Candidates",
          body: "Elect your country's steering candidate, using the online voting method."
        },
        {
          color: "white",
          icon: <UserIcon></UserIcon>,
          title: "Embrace Candidates",
          body: "Maximaize your chances of seeing grassroots action by having your political party's members surface the candidates they're most willing to back."
        }
      ] 
    },
    { 
      title: "Secure and Trustworthy", 
      color: "white", 
      gridCols: 3,
      children: [
        {
          color: "blue",
          icon: <LockClosedIcon></LockClosedIcon>,
          title: "Secure",
          body: "Our voting pages are encrypted so your voters can enjoy complete security and privacy while voting."
        },
        {
          color: "blue",
          icon: <ShieldCheckIcon></ShieldCheckIcon>,
          title: "Private",
          body: "We do not use or share your voters email addresses for any purposes outside of your Election."
        },
        {
          color: "blue",
          icon: <EyeOffIcon></EyeOffIcon>,
          title: "Anonymous",
          body: "We offer the strongest possible gurantee of voter anonymity; we simply do not track who votes for what only who votes and what the vote is."
        }
      ] 
    },
  ]

export default sections