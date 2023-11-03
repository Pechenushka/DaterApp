import {localizationPackType} from './localizationTypes';

const eng: localizationPackType = {
  lang_title: 'English',
  send: 'Send',
  contacts: 'contacts',
  chats: 'chats',
  profile_settings: 'profile settings',
  matches: 'Matches',
  age: 'age',
  announcement_text: 'announcement text',
  aply_filters: 'Apply filters',
  city: 'city',
  country: 'country',
  edit: 'edit',
  enter_your_message: 'Enter your message',
  filters: 'Filters',
  gender: 'gender',
  your_gender: 'your gender',
  items_not_found: 'Items not found',
  likes: 'likes',
  location: 'location',
  me_liked: 'Me Liked',
  my_likes: 'My Likes',
  preview: 'Preview',
  region: 'region',
  search: 'search',
  send_your_message: 'Send your message',
  something_went_wrong: 'something went wrong',
  write_few_words_about_yourself: 'Write few words about yourself',
  write_your_message: 'Write your message',
  your_announcement: 'your announcement',
  your_chats: 'your chats',
  servers_are_not_allowed: 'Servers are not allowed or no internet connection',
  moderation_request_pending: 'Your moderation request waiting to approve',
  profile_not_moderated:
    'Profile not moderated. Your avatar photo is unacceptable. Please change your avatar',
  please_request_moderation: 'Almost done! Please request moderation by adding avatar',
  help: 'help',
  requests: 'requests',
  authorization: 'Authorization',
  or: 'or',
  enter_your_email: 'Enter your email',
  enter_your_password: 'Enter your password',
  create_new_account: 'Create new account',
  login: 'login',
  chose_city: 'Choose city',
  chose_country: 'Choose country',
  chose_region: 'Choose region',
  date_of_birth: 'Date of birth',
  enter_your_name: 'Enter your name',
  repeat_your_password: 'Repeat your password',
  sign_up: 'Sign Up!',
  feedback: 'Contact us',
  month: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  selectLanguage: 'Select your language',
  languageWarning: 'Changes will be applied after restart',
  send_message: 'Send Message',
  like: 'Like',
  block_user: 'Block User',
  unblock_user: 'Unblock User',
  report_user: 'Report User/Content',
  send_report: 'Send report',
  add_comment_to_report: 'Add comment to report',
  must_be_at_least: (chars: number) => {
    return `Must be at least ${chars} chars`;
  },
  warning: 'Warning',
  your_report_successfully_sended: 'Your report was successfully sent',
  you_are_banned: 'Your profile was banned for violating community rules',
  privacy_rules: 'Privacy',
  terms_of_use_title: 'Terms of use',
  terms_of_use: `Community Guidelines
  Welcome to the Meebo community. If you’re honest, kind and respectful to others, you’ll always be welcome here. If you choose not to be, you may not last. Our goal is to allow users to express themselves freely as long as it doesn’t offend others. Everyone is held to the same standard on Meebo. We’re asking you to be considerate, think before you act, and abide by our community guidelines both on and offline. You heard that right: your offline behavior can lead to termination of your Meebo account.
  Below is a list of our community policies. If you violate any of these policies, you might be banned from Meebo. Seriously, don’t make us Swipe Left on you—because there will be no do-overs once we do. We encourage you to report any behavior that violates our policies.
  Meebo is not for:

  Nudity/Sexual Content

  We’re not asking you to comb your hair to one side or even speak in full sentences; but please keep it classy and appropriate for public consumption. No nudity, no sexually explicit content, and don’t chronicle all of your sexual desires in your bio. Keep it clean.
  Harassment
  Do not engage, or encourage others to engage, in any targeted abuse or harassment against any other user. This includes sending any unsolicited sexual content to your matches. Reports of stalking, threats, bullying, or intimidation, are taken very seriously.
  
  Violence and Physical Harm
  
  We do not tolerate violent, graphic, or gory content on Meebo, or any actions or content that advocate for or threaten violence of any sort, including threatening or promoting terrorism. Physical assault, coercion, and any acts of violence are strictly prohibited.
  Content that advocates for or glorifies suicide or self-harm is also not allowed. In these situations, we may take a number of steps to assist the user, including reaching out with crisis resources.
  
  Hate Speech
  Any content that promotes, advocates for, or condones racism, bigotry, hatred, or violence against individuals or groups based on factors like (but not limited to) race, ethnicity, religious affiliation, disability, gender, age, national origin, sexual orientation, or gender identity is not allowed.
  
  Private Information
  Don’t publicly broadcast any private information, yours or anyone else’s. This includes social security numbers, passports, passwords, financial information or unlisted contact information, such as phone numbers, email addresses, home/work address.
  
  Spam
  Don’t be fake. Be real instead. Don’t use Meebo to drive people to external websites via a link or otherwise.
  
  Promotion or Solicitation
  Soliciting other users is prohibited on Meebo. It’s fine to invite your matches to something that you’re doing, but if the purpose of your profile is to advertise your event or business, non-profit, political campaign, contest, or to conduct research, we may delete your account. While we’re excited that you’re doing a comedy show next week, please don’t use Meebo to promote it.
  
  Prostitution and Trafficking
  Promoting or advocating for commercial sexual services, human trafficking or other non-consensual sexual acts is strictly prohibited and will result in your account being banned from Meebo.
  
  Scamming
  Meebo has a zero-tolerance policy on predatory behavior of any kind. Anyone attempting to get other users’ private information for fraudulent or illegal activity may be banned. Any user caught sharing their own financial account information (PayPal, Venmo, etc.) for the purpose of receiving money from other users may also be banned from Meebo.
  
  Impersonation
  Be yourself! Don’t pretend to be someone else.
  Do not impersonate, or otherwise misrepresent affiliation, connection or association with, any person or entity. This includes parody accounts. While we think your Mike Pence profile is hilarious, you aren’t Mike Pence. And if you are, what are you doing on Meebo?
 
  Minors
  You must be 18 years of age or older to use Meebo. As such, we do not allow images of unaccompanied minors. If you want to post photos of your children, please make sure that you are in the photo as well. If you see a profile that includes an unaccompanied minor, encourages harm to a minor, or depicts a minor in a sexual or suggestive way, please report it immediately.
  
  Copyright and Trademark Infringement
  If it’s not yours, don’t post it. If your Meebo profile includes any work that is copyrighted or trademarked by others, don’t display it, unless you are allowed to do so.
  
  Illegal Usage
  Don’t use Meebo to do anything illegal. If it’s illegal IRL, it’s illegal on Meebo.
  
  One Person, One Account
  Meebo accounts cannot have multiple owners, so don’t create an account with your friend or significant other. Additionally, please don’t maintain multiple Meebo accounts.
  
  Third Party Apps
  The use of any apps created by anyone other than Meebo that claim to offer our service or unlock special Meebo features (like auto-swipers) is not allowed.
  
  Account Dormancy
  Meebo is fun to use... all the time! Use Meebo at the lake, use Meebo while eating cake. Use Meebo when you’re out, use Meebo when in doubt! But, if you don’t log in to your Meebo account in 2 years, we may delete your account for inactivity.
  `,
  privacy_policy_text: `Meebo Privacy
  OUR COMMITMENT TO YOU At Meebo, your privacy is our highest priority. It is at the heart of developing and creating the services and products you know and love. All so that you have the opportunity to fully trust them and focus on new important acquaintances.
  
  We appreciate the fact that you trust us with your information, and we treat it responsibly.
  
  Our Privacy Commitment. When creating each product and service, we think about the privacy of our users. We bring in experts from various fields such as legal, security, development, product design and more to make every decision with respect for your privacy.
  
  Our commitment to transparency. We use many of the same online services as you, so we understand that incomplete information and overly complex language are common problems with privacy policies. Our approach is exactly the opposite: we try to write the privacy policy and other similar documents in an understandable language. We really want users to read our policies and understand our practices.
  
  Our commitment to safety. We have people who care about the security of your data. We regularly update our security practices and invest in the industry to strengthen the protection of your information.
  
  Privacy Policy Welcome to Meebo's Privacy Policy. Thank you for taking the time to get to know her.
  
  We appreciate that you trust us with your information, and we intend to keep that trust. First, we want you to understand what information we collect, why we collect it, how it is used, and what choices you have about your data. In this policy, we describe our privacy practices in plain language and try to avoid legal and technical terminology as much as possible.
  
  EFFECTIVE DATE: May 17, 2022.
  
  Where our Privacy Policy applies
  This privacy policy applies to applications, events and other services operated by the Meebo brand. For simplicity in this privacy policy, we refer to all of these as our services. For even greater clarity, we have added a link to this privacy policy on all relevant services.
  
  Some services may require their own unique privacy policy. If a particular service has its own privacy policy, that policy applies, not the current one.

  Information we collect
  Of course, we won't be able to help you make the right acquaintances without certain information about you, such as basic profile data and the type of people you want to communicate with. We also collect information about how you use our services, such as access to logs, and data from third parties when you, for example, access our services through your social network account or download information from your social network account, to complete a profile. Additional information is provided below.
  
  Information you provide to us
  By using our services, you agree to provide us with certain information, including the following:
  
  When you create an account, you tell us at least your email address and some basic information that is necessary for the service to work, such as your gender or date of birth. When filling out a profile, you can share additional information, such as biographical information, interests and other details about yourself, as well as content such as a photo. To add certain materials, such as photos, you can give us access to your photo album. If you contact our customer support service, we collect information that you provide to us during that interaction. If you share information about other people with us (for example, if you use a friend's contact details for a feature), we process that information on your behalf to fulfill your request. Of course, we also process data from your chats with other users and the content you post as needed to operate the services. Information We Receive From Others In addition to the information you provide directly to us, we receive information about you from other sources, including:
  
  Users Users may provide information about you when using our services, for example, if they interact with you or submit a complaint about you. When you use our services, technical data is generated about the features you use, how you use them, and the devices from which you use our services. Below are the details:
  
  Usage Information Your use of the Services generates data about your activity on them, for example, how you use them (such as login time, functions used, actions, information shown to you, the address of the web pages with the original link and advertisements with which you interacted) and how you interact with other users (for example, the users with whom you communicate and interact, when exactly this happens, the number of messages sent and received). Device Information We collect information from and about the device or devices from which you use our services, including hardware and software data, such as IP address, device identifier and type, application settings and characteristics, crashes applications, advertising identifiers (randomly generated numbers that can be reset in the device settings), identifiers associated with cookies or other technologies that can uniquely identify a device or browser. In the same way, if you give permission, we can collect photos.
  
  How we use information
  The main reason we use your information is to provide and improve our services. In addition, we use your information to protect you. Below we have explained in detail the various reasons for using your information and provided practical examples.
  
  A. To administer your account and ensure the operation of our services Creating and managing your account Providing you with support and answers to your requests Carrying out your transactions Communicating with you about our services B. To help you get to know other users Recommending other users to you Showing user profiles one to one C. To prevent and detect and combat fraud or other illegal or unauthorized activity Search for and remedy violations (current, suspected or suspected) of our Terms of Use, including by reviewing complaints and interactions between users Better understand and develop countermeasures against violations of our Terms of Use Retaining data related to a breach of our Terms of Use to prevent repeat incidents Enforcing or enforcing our rights, such as our Terms of Use Contacting individuals who submit complaints to inform them of our action on their complaint D. To ensure compliance legislation Compliance with legal requirements Assistance to law enforcement agencies Information on the processing of personal data through profiling and automated decision-making can be found in the FAQ section.
  
  To other users You provide information to other users when you voluntarily disclose it on the service (including information contained in a public profile). Please exercise caution and make sure that you really do not mind sharing certain information.
  
  If someone submits a complaint related to you (for example, about your violation of our Terms of Use), we may notify the person who submitted the complaint about the action (if any) we have taken as a result of the complaint.
  
  We follow a strict vetting process before engaging any service provider or working with any partner. Our service providers and partners must agree to strict confidentiality obligations.
  
  We share your information with affiliates for limited lawful purposes as set forth below:
  
  To law enforcement agencies / as required by law We may disclose your information if reasonably necessary: ​​1) as required by legal process, such as pursuant to a court order, subpoena or search warrant, due to a government or law enforcement investigation, or other legal requirements; 2) to help prevent or detect a crime (in each case subject to applicable law); 3) for the protection of some person.
  
  To enforce legal rights, We may also provide information: 1) if disclosure would mitigate our liability in an actual or potential lawsuit; 2) as necessary to protect our legal rights and the legal rights of our users, business partners or other interested parties; 3) to fulfill our agreements with you; 4) to investigate, prevent or take other measures regarding illegal activity, possible fraud or other offenses.
  
  Upon your consent or request, We may ask for your consent to share your information with third parties. In such cases, we will clearly explain why we want to share this information.
  
  We may use and share non-personal information (that is, information that does not personally identify you, including device information, general demographic information, general behavioral data, non-personally identifiable location information), and personal information in a hashed form in which it cannot be read by a person under any of the above circumstances.
  
  Your rights
  We want you to be in control of your information, so we remind you of the following options and tools:
  
  Means of access / update in the service. Account tools and settings will help you access the information you provide to us that is related to your account directly on the Service, as well as correct or remove such information. If you have any questions about these tools and settings, please contact our support team. Device permissions. Mobile platforms may have permission systems for certain types of data and notifications, such as phone contacts, images, location services, push notifications, and advertising identifiers. You can change the settings of the device, giving consent or denying consent to the collection and processing of relevant information or the display of relevant notifications. Of course, if you do not give consent, certain services may lose their functionality. Removal You can stop all information collection by the app by uninstalling it through the standard uninstall process on your device. Please note: deleting the application does NOT terminate the account. To close your account, use the corresponding function on the service. Account closure. The account can be closed by using the corresponding function directly in the service. We also want our users to be aware of their privacy rights.`,
  i_agree_with: 'I agree with',
  and: 'and',
  privacy_policy_title: 'Privacy policy',
  goals: ['family building', 'travels', 'flirting', 'chatting', 'friendship', 'sex'],
  i_looking_for: `I'm looking for`,
  for: 'for',
  genders: ['Man', 'Women'],
  your_expectations: 'Your expectations',
  your_dating_goals: 'Your dating goals',
  it_is_you: 'It is you!',
  choose_variant: 'Choose variant',
  our_telegram: 'Our telegram',
  stepof: (curentStep, numberOfSteps) => {
    return `Step ${curentStep} of ${numberOfSteps}`;
  },
  hints: [
    'Please provide basic information about yourself',
    'Please enter your date of birth and your gender',
    'Almost done! Enter your location and press Sign Up!',
  ],
  prev: 'prev',
  next: 'next',
  delete_accaunt: 'Delete account',
  delete_accaunt_question: 'Are you sure you want to delete account?',
  delete_avatar_question: 'Are you sure you want to delete your avatar?',
  no: 'no',
  yes: 'yes',
  delete_chat: 'Delete chat',
  all_cities: 'All cities',
  all_countries: 'All countries',
  all_regions: 'All regions',
  choose_gender: 'Choose gender',
  iam_man: 'I am a man',
  iam_women: 'I am a woman',
  your_photo_gallery: 'Your Photo Gallery',
  now_you_can_make_photo_access_request:
    'Now you have the opportunity to request access to the photo',
  cant_load_video: `We can't download the video, most likely the problem is a slow connection`,
  make_request: 'Request Access',
  oops: 'Ouch!',
  success: 'Success!',
  this_photo_was_hide_by_owner:
    'Access to the photo is limited by the owner, request access from the owner of the photo, for this, watch a short video.',
  watch_video: 'Watch ad',
  you_successfully_requested_access: 'Access request has been sent successfully!',
  photo_access_requests: 'Access requests',
  photo_gallery: 'Photo Gallery',
  my_requests: 'My Requests',
  requests_to_me: 'Requests To Me',
  approved: 'Approved',
  pending: 'Pending',
  rejected: 'Rejected',
  requestItemStatusMessage: {
    approved: `This user's request has been approved`,
    pending: 'Requests access and waits for a response',
    rejected: `This user's request was denied`,
  },
  requestHelpMessage: {
    myRequests: {
      approved: 'Shown here are your requests that have been approved.',
      pending: 'Shown here are your pending requests.',
      rejected: 'Shown here are your rejected requests.',
    },
    requestToMe: {
      approved: 'Shown here are requests to you that you have approved.',
      pending: 'Shown here are requests to you that are waiting for your response.',
      rejected: 'This shows requests to you that you have declined.',
    },
  },
  for_add_annon_photo_watch_add:
    'In order to add an anonymous photo you need to watch one short video',
  no_items_here_yet: `While there's nothing here`,
  now_you_can_add_anon_photo: 'Now you can add an anonymous photo',
  photoGalleryAnonPhotoHint: `These photos will be visible only to those users to whom you have given access. Thus, only you decide who will see these photos. Photos that have not yet been moderated are marked with a red frame. Limit 4`,
  photoGalleryPhotoHint:
    'These photos will be visible to all users. Photos that have not yet been moderated are marked with a red frame. Limit 5',
  sorry_you_rich_anon_photos_limit: `Sorry, you've reached your anonymous photo limit. 4/4`,
  your_anon_photos: 'Your Anonymous Photos',
  your_photos: 'Your Photos',
  alco: [
    'I do not drink',
    'I drink in company',
    'Sometimes I drink',
    'I do not deny myself alcohol',
  ],
  smoking: ['I do not smoke', 'I smoke in company', 'I rarely smoke', 'I smoke regularly'],
  kids: [
    `I don't have children and don't plan to`,
    `I don't have children but I would like to`,
    `I have children, we live together`,
    `I have children, we live separately`,
  ],
  additional_info: 'Additional info',
  your_attitude_towards_alcohol: 'Your attitude towards alcohol',
  your_attitude_towards_smoking: 'Your attitude towards smoking',
  do_you_have_children: 'Do you have children',
  i_dont_mind_being_a_sponsor: `I don't mind being a sponsor`,
  i_dont_mind_being_a_kepter: `I don't mind living at the expense of a partner`,
  not_setted: 'not setted',
  attitude_towards_alcohol: 'Attitude towards alcohol',
  attitude_towards_smoking: 'Attitude towards smoking',
  children: 'Children',
  dating_goals: 'Dating goals',
  show_olnly_persons_dont_mind_being_a_kepter:
    'Show only those who do not mind living at the expense of a partner',
  show_olnly_persons_dont_mind_being_a_sponsor: `Show only those who don't mind becoming a sponsor`,
  all_variants: 'all variants',
  guests: 'Guests',
  guestWays: [
    'Redirected from search screen',
    'Redirected from likes screen',
    'Redirected from chat screen',
    'Redirected from guests screen',
  ],
  my_guests: 'My Guests',
  my_visits: 'My Visits',
  guestHints: {
    myGuests: 'Here are the users who visited your profile',
    myVisits: 'This shows the users you visited',
  },
  chat_list_screen: `Chat List Screen`,
  chat_screen: `Chat Screen`,
  guests_screen: `Guests Screen`,
  likes_screen: `Likes Screen`,
  photo_access_requests_screen: `Photo Access Requests Screen`,
  photo_gallery_screen: `Photo Gallery Screen`,
  profile_settings_screen: `Profile Settings Screen`,
  search_screen: `Search Screen`,
  home_screen: `Home Screen`,
  chat_list_screen_hint: `This screen can be accessed using the button on the bottom navigation bar.
  All your chats are displayed here sorted by the date of the last message in the chat`,
  chat_screen_hint: `This screen can be accessed by selecting any chat from the list of chats on the Chat List Screen.
  The profile of your interlocutor is shown at the top of the screen. Also in the context menu there are options for deleting a chat and blocking your interlocutor.
  In the center you will see the history of messages in your interlocutor.
  At the bottom of the screen you will see a field for entering a message and a button to send a message.`,
  guests_screen_hint: `You can get to this screen using the button on the main screen "Guests".
  This screen shows the guests of your profile.
  At the top of the screen you will see a tab switcher. In the tab "My Guests" you will find all the users who visited your profile. In the tab "My Visits" you will find the users you visited.
  The entry about visiting the questionnaire is deleted after 30 days.`,
  likes_screen_hint: `This screen can be accessed using the button on the bottom navigation bar.
  At the top of the screen you will see a tab switcher.
  
  Tab "My likes".
  Here you can see profiles of users you like.
  
  "Like" tab.
  Here you can see profiles of users who liked you.
  
  Matches tab.
  Here you can see profiles of users with whom you have matched likes.`,
  photo_access_requests_screen_hint: `This screen can be accessed using the button on the main Access Requests screen.
  This screen shows requests for access to anonymous photos.
  At the top of the screen, you will see two tab switches. In the first one, you choose which requests will be shown - requests to you, or your requests to other users.
  Each request has 3 statuses (bottom tab switcher). The "Approved" status indicates that the request has been approved. The "Pending" status indicates that the request is pending. The "Rejected" status indicates that the request was rejected.
  You also have the option to change your mind at any time.`,
  photo_gallery_screen_hint: `This screen can be accessed using the button on the main Photo Gallery screen.
  At the top of the screen is a block with your public photos, and at the bottom of the block with your anonymous photos.
  
  Public photos (upper block)
  These photos will be visible to all users. Photos that have not yet been moderated are marked with a red frame. Limit 5.
  
  Anonymous photos (bottom block)
  These photos will be visible only to those users to whom you have given access. Thus, only you decide who will see these photos. Photos that have not yet been moderated are marked with a red frame. Limit 4. Access requests for these photos can be found on the "Access Requests" screen`,
  profile_settings_screen_hint: `You can get to this screen using the button on the main screen "Questionnaire Settings".
  On this screen you can edit your profile. You have the opportunity to write a few words about yourself, indicate the location, indicate your expectations from a partner, and also indicate additional information about yourself such as your attitude to smoking, alcohol, having children, and also indicate whether you are ready to become a sponsor or not against live off your partner.
  All data that you enter here will be visible to other users.`,
  search_screen_hint: `This screen can be accessed using the button on the bottom navigation bar.
  At the top of the screen you will see the location from which the profiles were selected. you will also find a bunch of filters there. All filters you choose are saved and will be automatically applied the next time you open the app.
  In the main part of the screen there is a list of profiles that match all filters. The list is automatically sorted by the date of the user's last visit.
  Each profile in the list can be marked with a green icon or a red icon. The green icon marks users who don't mind becoming sponsors. The red icon marks users who do not mind living at the expense of a partner.`,
  home_screen_hint: `This is your main screen, where you go when you open the app.
  At the top of the screen, you have the opportunity to upload your avatar. To do this, click on the large camera button. Once you have uploaded your avatar, it will appear in a circle frame instead of a camera button. To change your avatar, click on your current avatar. To remove an avatar, click on the small cross button in the lower right corner of your avatar.
  Under the avatar is the basic information about you and your contact details (visible only to you). Below is the navigation bar.`,
  private: 'Private',
  public: 'Public',
  your_avatar: 'Your Avatar',
  your_accaunt_added: 'Your profile successfully added',
  registration_errors: {
    agree_TOF: 'You must agree to the terms of use',
    email_empty: 'Email can not be empty',
    less100: 'Seriously, you are over 100 years old?',
    name_empty: 'Name can not be empty',
    over18: 'You must be over 18 years old',
    password_6_cahrs: 'Password must be at least 6 characters',
    password_confirm_empty: 'Password Confirm can not be empty',
    password_empty: 'Password can not be empty',
    password_match: 'Confirm password does not match',
    provide_gender: 'Provide your gender',
    select_city: 'Select your city or closest to you',
    select_country: 'Select your country',
    select_region: 'Select your region',
  },
  minutes_ago: 'minutes ago',
  long_time_ago: 'long time ago',
  just_now: 'just now',
  you_block_each_other: 'You block each other!',
  you_block_this_user: 'You block this user!',
  you_blocked_by_user: 'You are blocked by this user!',
  expected_age: `Desired age`,
  get_from_age: age => `from ${age}`,
  get_to_age: age => `to ${age}`,
  in_age: `in age`,
  announcement_edited: 'Your profile successfuly edited',
  report_this_message: 'Report this message',
};

export {eng};
