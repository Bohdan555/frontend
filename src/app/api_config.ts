export class BaseApi{
  public static  readonly  baseUrl : string = 'http://193.33.64.97:8083';//'http://fa5dbf4b.ngrok.io'
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
}
