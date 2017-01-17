class HomeController {
  constructor(Firedbservice, FiredbAutorisation, AuthService, authManager) {
    'ngInject';
    this.AuthService = AuthService;
    this.AuthService.registerAuthenticationListener();
    this.FiredbAutorisation = FiredbAutorisation;
    this.FiredbAutorisation = FiredbAutorisation;
    this.FiredbAutorisation.responseData().then(res => {
      this.usersData = res.userData;
      this.color = res.userData.themeColor;
    });
  }
}

export default HomeController;
