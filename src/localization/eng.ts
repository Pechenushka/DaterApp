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
  aply_filters: 'Aply filters',
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
  your_report_successfully_sended: 'Your report was successfully sended',
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
  genders: ['Male', 'Female', 'Male or Female'],
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
    'Almoust done! Enter your location and press Sign Up!',
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
};

export {eng};
