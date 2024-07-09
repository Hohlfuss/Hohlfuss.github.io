"use strict";
class Ottelija {
    wins;
    losses;
    nc;
    winsByKnockout;
    winsBySubmission;
    firstRoundFinishes;
    strikingAccuracy;
    takedownAccuracy;
    sigStrickikesLanded;
    sigStrikesAttempted;
    takeDownsLanded;
    takeDownsAttempted;
    sigStrLandedPerMinute;
    sigStrAbsorbedPerMinute;
    takeDownAvgPer15Min;
    submissionAvgPer15Min;
    sigStrDefence;
    takeDownDefence;
    knockDownAvg;
    averageFightTime;
    sigStrByPositionStanding;
    sigStrByPositionClinch;
    sigStrByPositionGrounded;
    sigStrByTargetHead;
    sigStrByTargetBody;
    sigStrByTargetLeg;
    winByMethodKoTko;
    winByMethodDec;
    winByMethodSub;
    constructor(wins, losses, nc, winsByKnockout, winsBySubmission, firstRoundFinishes, strikingAccuracy, takedownAccuracy, sigStrickikesLanded, sigStrikesAttempted, takeDownsLanded, takeDownsAttempted, sigStrLandedPerMinute, sigStrAbsorbedPerMinute, takeDownAvgPer15Min, submissionAvgPer15Min, sigStrDefence, takeDownDefence, knockDownAvg, averageFightTime, sigStrByPositionStanding, sigStrByPositionClinch, sigStrByPositionGrounded, sigStrByTargetHead, sigStrByTargetBody, sigStrByTargetLeg, winByMethodKoTko, winByMethodDec, winByMethodSub) {
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
        return this.wins / this.losses - this.nc + this.winsByKnockout + this.winsBySubmission + this.firstRoundFinishes;
    }
}
//const ottelija1 = new Ottelija ()
