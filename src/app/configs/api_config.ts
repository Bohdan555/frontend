export class BaseApi{
  public static  readonly  baseUrl : string = 'http://pbrat.com';
}

export class LoginApiConfig extends BaseApi{
  public static readonly SignInEndpoint : string = BaseApi.baseUrl + '/signin';
  public static readonly SignUpEndpoint : string = BaseApi.baseUrl + '/signup';
}

export class LoggerApi extends BaseApi{
  public static readonly LoggerApiEndpoint : string = BaseApi.baseUrl + '/log';
}

export class ProfileApiConfig extends BaseApi{
  public static readonly IndividualEndPoint : string = BaseApi.baseUrl + '/individual';
  public static readonly FeedbacksEndPoint : string = BaseApi.baseUrl + '/feedback';
  public static readonly SkillsEndPoint : string = BaseApi.baseUrl + '/skills';
  public static readonly HobbiesEndPoint : string = BaseApi.baseUrl + '/hobbies';
  public static readonly ExperienceEndPoint : string = BaseApi.baseUrl + '/experience'
}
