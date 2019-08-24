class CommunityService {
  constructor() {
    // this.showCommunity = communityConfig.showCommunity;
    //change the value to 0
    this.showCommunity = 0
  }

  setShowCommunity(show) {
    this.showCommunity = show
  }

  getShowCommunity() {
    return this.showCommunity
  }
}
