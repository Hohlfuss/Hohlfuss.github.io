class Ottelija {
    wins: number;
    losses: number;
    nc: number;
    winsByKnockout: number;
    winsBySubmission: number;
    firstRoundFinishes: number;
    strikingAccuracy: number;
    takedownAccuracy: number;
    sigStrickikesLanded: number;
    sigStrikesAttempted: number;
    takeDownsLanded: number;
    takeDownsAttempted: number;
    sigStrLandedPerMinute: number;
    sigStrAbsorbedPerMinute: number;
    takeDownAvgPer15Min: number;
    submissionAvgPer15Min: number;
    sigStrDefence: number;
    takeDownDefence: number;
    knockDownAvg: number;
    averageFightTime: number;
    sigStrByPositionStanding: number;
    sigStrByPositionClinch: number;
    sigStrByPositionGrounded: number;
    sigStrByTargetHead: number;
    sigStrByTargetBody: number;
    sigStrByTargetLeg: number;
    winByMethodKoTko: number;
    winByMethodDec: number;
    winByMethodSub: number;

    constructor(
        wins: number, 
        losses: number, 
        nc: number, 
        winsByKnockout: number, 
        winsBySubmission: number, 
        firstRoundFinishes: number, 
        strikingAccuracy: number, 
        takedownAccuracy: number, 
        sigStrickikesLanded: number,
        sigStrikesAttempted: number,
        takeDownsLanded: number,
        takeDownsAttempted: number,
        sigStrLandedPerMinute: number,
        sigStrAbsorbedPerMinute: number,
        takeDownAvgPer15Min: number,
        submissionAvgPer15Min: number,
        sigStrDefence: number,
        takeDownDefence: number,
        knockDownAvg: number,
        averageFightTime: number,
        sigStrByPositionStanding: number,
        sigStrByPositionClinch: number,
        sigStrByPositionGrounded: number,
        sigStrByTargetHead: number,
        sigStrByTargetBody: number,
        sigStrByTargetLeg: number,
        winByMethodKoTko: number,
        winByMethodDec: number,
        winByMethodSub: number
    ) {
        this.wins = wins;
        this.losses = losses;
        this.nc = nc;
        this.winsByKnockout = winsByKnockout;
        this.winsBySubmission = winsBySubmission;
        this.firstRoundFinishes = firstRoundFinishes;
        this.strikingAccuracy = strikingAccuracy;
        this.takedownAccuracy = takedownAccuracy;
        this.sigStrickikesLanded = sigStrickikesLanded;
        this.sigStrikesAttempted = sigStrikesAttempted;
        this.takeDownsLanded = takeDownsLanded;
        this.takeDownsAttempted = takeDownsAttempted;
        this.sigStrLandedPerMinute = sigStrLandedPerMinute;
        this.sigStrAbsorbedPerMinute = sigStrAbsorbedPerMinute;
        this.takeDownAvgPer15Min = takeDownAvgPer15Min;
        this.submissionAvgPer15Min = submissionAvgPer15Min;
        this.sigStrDefence = sigStrDefence;
        this.takeDownDefence = takeDownDefence;
        this.knockDownAvg = knockDownAvg;
        this.averageFightTime = averageFightTime;
        this.sigStrByPositionStanding = sigStrByPositionStanding;
        this.sigStrByPositionClinch = sigStrByPositionClinch;
        this.sigStrByPositionGrounded = sigStrByPositionGrounded;
        this.sigStrByTargetHead = sigStrByTargetHead;
        this.sigStrByTargetBody = sigStrByTargetBody;
        this.sigStrByTargetLeg = sigStrByTargetLeg;
        this.winByMethodKoTko = winByMethodKoTko;
        this.winByMethodDec = winByMethodDec;
        this.winByMethodSub = winByMethodSub;
    }
    calculatePower() {
        return this.wins / this.losses -this.nc + this.winsByKnockout + this.winsBySubmission + this.firstRoundFinishes;
    }
}

//const ottelija1 = new Ottelija ()