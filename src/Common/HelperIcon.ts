import {hp} from '../constants/Dimensions';

class IconHelper {
  static iconDiameter(diameter: number) {
    if (diameter === null) {
      return diameter;
    }
    return {
      width: hp(diameter),
      height: hp(diameter),
    };
  }
  static deleteEmojiInString = (value: string) => {
    return value.replace(
      /(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/g,
      '',
    );
  };

  static character(userName: string) {
    let firstCharacter = 'U';
    if (typeof userName !== 'undefined' && userName.length >= 1) {
      let name = userName.toString();
      const newName = IconHelper.deleteEmojiInString(name);
      try {
        const characters = newName.split(' ');
        if (characters.length > 1) {
          firstCharacter = characters[0].charAt(0);
        } else {
          firstCharacter = newName.charAt(0);
        }
      } catch (e) {}
    }
    if (firstCharacter === '') {
      firstCharacter = 'U';
    }
    return firstCharacter.toUpperCase();
  }

  static getColor(firstChar: string) {
    let result = {
      backgroundColor: '#fff',
      color: '#FC532F',
      borderColor: '#FC532F',
    };

    firstChar = firstChar.toLowerCase().charAt(0);

    switch (firstChar) {
      case 'а':
        result.backgroundColor = '#933DA9';
        result.color = '#FFFFFF';
        break;
      case 'м':
        result.backgroundColor = '#933DA9';
        result.color = '#FFFFFF';
        break;
      case 'щ':
        result.backgroundColor = '#933DA9';
        result.color = '#FFFFFF';
        break;
      case 'e':
        result.backgroundColor = '#933DA9';
        result.color = '#FFFFFF';
        break;
      case 'r':
        result.backgroundColor = '#933DA9';
        result.color = '#FFFFFF';
        break;
      case '5':
        result.backgroundColor = '#933DA9';
        result.color = '#FFFFFF';
        break;
      case 'б':
        result.backgroundColor = '#546CA9';
        result.color = '#FFFFFF';
        break;
      case 'н':
        result.backgroundColor = '#546CA9';
        result.color = '#FFFFFF';
        break;
      case 'ъ':
        result.backgroundColor = '#546CA9';
        result.color = '#FFFFFF';
        break;
      case 'f':
        result.backgroundColor = '#546CA9';
        result.color = '#FFFFFF';
        break;
      case 's':
        result.backgroundColor = '#546CA9';
        result.color = '#FFFFFF';
        break;
      case '6':
        result.backgroundColor = '#546CA9';
        result.color = '#FFFFFF';
        break;
      case 'в':
        result.backgroundColor = '#2FA9E4';
        result.color = '#FFFFFF';
        break;
      case 'о':
        result.backgroundColor = '#2FA9E4';
        result.color = '#FFFFFF';
        break;
      case 'ы':
        result.backgroundColor = '#2FA9E4';
        result.color = '#FFFFFF';
        break;
      case 'g':
        result.backgroundColor = '#2FA9E4';
        result.color = '#FFFFFF';
        break;
      case 't':
        result.backgroundColor = '#2FA9E4';
        result.color = '#FFFFFF';
        break;
      case '7':
        result.backgroundColor = '#2FA9E4';
        result.color = '#FFFFFF';
        break;
      case 'г':
        result.backgroundColor = '#F37047';
        result.color = '#FFFFFF';
        break;
      case 'п':
        result.backgroundColor = '#F37047';
        result.color = '#FFFFFF';
        break;
      case 'ь':
        result.backgroundColor = '#F37047';
        result.color = '#FFFFFF';
        break;
      case 'h':
        result.backgroundColor = '#F37047';
        result.color = '#FFFFFF';
        break;
      case 'u':
        result.backgroundColor = '#F37047';
        result.color = '#FFFFFF';
        break;
      case '8':
        result.backgroundColor = '#F37047';
        result.color = '#FFFFFF';
        break;
      case 'д':
        result.backgroundColor = '#D42A2A';
        result.color = '#FFFFFF';
        break;
      case 'р':
        result.backgroundColor = '#D42A2A';
        result.color = '#FFFFFF';
        break;
      case 'э':
        result.backgroundColor = '#D42A2A';
        result.color = '#FFFFFF';
        break;
      case 'i':
        result.backgroundColor = '#D42A2A';
        result.color = '#FFFFFF';
        break;
      case 'v':
        result.backgroundColor = '#D42A2A';
        result.color = '#FFFFFF';
        break;
      case '9':
        result.backgroundColor = '#D42A2A';
        result.color = '#FFFFFF';
        break;
      case 'е':
        result.backgroundColor = '#E59089';
        result.color = '#FFFFFF';
        break;
      case 'с':
        result.backgroundColor = '#E59089';
        result.color = '#FFFFFF';
        break;
      case 'ю':
        result.backgroundColor = '#E59089';
        result.color = '#FFFFFF';
        break;
      case 'j':
        result.backgroundColor = '#E59089';
        result.color = '#FFFFFF';
        break;
      case 'w':
        result.backgroundColor = '#E59089';
        result.color = '#FFFFFF';
        break;
      case '0':
        result.backgroundColor = '#E59089';
        result.color = '#FFFFFF';
        break;
      case 'ё':
        result.backgroundColor = '#F5C84E';
        result.color = '#0D0939';
        break;
      case 'т':
        result.backgroundColor = '#F5C84E';
        result.color = '#0D0939';
        break;
      case 'я':
        result.backgroundColor = '#F5C84E';
        result.color = '#0D0939';
        break;
      case 'k':
        result.backgroundColor = '#F5C84E';
        result.color = '#0D0939';
        break;
      case 'x':
        result.backgroundColor = '#F5C84E';
        result.color = '#0D0939';
        break;
      case 'ж':
        result.backgroundColor = '#8490C8';
        result.color = '#0D0939';
        break;
      case 'у':
        result.backgroundColor = '#8490C8';
        result.color = '#FFFFFF';
        break;
      case 'ї':
        result.backgroundColor = '#8490C8';
        result.color = '#FFFFFF';
        break;
      case 'l':
        result.backgroundColor = '#8490C8';
        result.color = '#FFFFFF';
        break;
      case 'y':
        result.backgroundColor = '#8490C8';
        result.color = '#FFFFFF';
        break;
      case 'з':
        result.backgroundColor = '#4CB684';
        result.color = '#FFFFFF';
        break;
      case 'ф':
        result.backgroundColor = '#4CB684';
        result.color = '#FFFFFF';
        break;
      case 'і':
        result.backgroundColor = '#4CB684';
        result.color = '#FFFFFF';
        break;
      case 'm':
        result.backgroundColor = '#4CB684';
        result.color = '#FFFFFF';
        break;
      case 'z':
        result.backgroundColor = '#4CB684';
        result.color = '#FFFFFF';
        break;
      case 'и':
        result.backgroundColor = '#636363';
        result.color = '#FFFFFF';
        break;
      case 'х':
        result.backgroundColor = '#636363';
        result.color = '#FFFFFF';
        break;
      case 'a':
        result.backgroundColor = '#636363';
        result.color = '#FFFFFF';
        break;
      case 'n':
        result.backgroundColor = '#636363';
        result.color = '#FFFFFF';
        break;
      case '1':
        result.backgroundColor = '#636363';
        result.color = '#FFFFFF';
        break;
      case 'й':
        result.backgroundColor = '#217F4E';
        result.color = '#FFFFFF';
        break;
      case 'ц':
        result.backgroundColor = '#217F4E';
        result.color = '#FFFFFF';
        break;
      case 'b':
        result.backgroundColor = '#217F4E';
        result.color = '#FFFFFF';
        break;
      case 'o':
        result.backgroundColor = '#217F4E';
        result.color = '#FFFFFF';
        break;
      case '2':
        result.backgroundColor = '#217F4E';
        result.color = '#FFFFFF';
        break;
      case 'к':
        result.backgroundColor = '#FC532F';
        result.color = '#FFFFFF';
        break;
      case 'ч':
        result.backgroundColor = '#FC532F';
        result.color = '#FFFFFF';
        break;
      case 'c':
        result.backgroundColor = '#FC532F';
        result.color = '#FFFFFF';
        break;
      case 'p':
        result.backgroundColor = '#FC532F';
        result.color = '#FFFFFF';
        break;
      case '3':
        result.backgroundColor = '#FC532F';
        result.color = '#FFFFFF';
        break;
      case 'л':
        result.backgroundColor = '#FFA726';
        result.color = '#0D0939';
        break;
      case 'ш':
        result.backgroundColor = '#FFA726';
        result.color = '#0D0939';
        break;
      case 'd':
        result.backgroundColor = '#FFA726';
        result.color = '#0D0939';
        break;
      case 'q':
        result.backgroundColor = '#FFA726';
        result.color = '#0D0939';
        break;
      case '4':
        result.backgroundColor = '#FFA726';
        result.color = '#0D0939';
        break;
      default:
        result.backgroundColor = '#FC532F';
        result.color = '#0D0939';
        break;
    }

    return result;
  }
}

export {IconHelper};
