"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DiplomacyType;
(function (DiplomacyType) {
    DiplomacyType[DiplomacyType["alliance"] = 0] = "alliance";
    DiplomacyType[DiplomacyType["war"] = 1] = "war";
    DiplomacyType[DiplomacyType["nap"] = 2] = "nap";
})(DiplomacyType = exports.DiplomacyType || (exports.DiplomacyType = {}));
var DiplomacyStatus;
(function (DiplomacyStatus) {
    DiplomacyStatus[DiplomacyStatus["pending"] = 0] = "pending";
    DiplomacyStatus[DiplomacyStatus["ongoing"] = 1] = "ongoing";
})(DiplomacyStatus = exports.DiplomacyStatus || (exports.DiplomacyStatus = {}));
var EventType;
(function (EventType) {
    EventType[EventType["diplomacy"] = 0] = "diplomacy";
    EventType[EventType["invitation"] = 1] = "invitation";
    EventType[EventType["membership"] = 2] = "membership";
    EventType[EventType["roles"] = 3] = "roles";
    EventType[EventType["management"] = 4] = "management";
    EventType[EventType["forum"] = 5] = "forum";
})(EventType = exports.EventType || (exports.EventType = {}));
var EventStatus;
(function (EventStatus) {
    EventStatus[EventStatus["proposeAlliance"] = 0] = "proposeAlliance";
    EventStatus[EventStatus["cancelAlliance"] = 1] = "cancelAlliance";
    EventStatus[EventStatus["rejectAlliance"] = 2] = "rejectAlliance";
    EventStatus[EventStatus["startAlliance"] = 3] = "startAlliance";
    EventStatus[EventStatus["endAlliance"] = 4] = "endAlliance";
    EventStatus[EventStatus["proposeNap"] = 5] = "proposeNap";
    EventStatus[EventStatus["cancelNap"] = 6] = "cancelNap";
    EventStatus[EventStatus["rejectNap"] = 7] = "rejectNap";
    EventStatus[EventStatus["startNap"] = 8] = "startNap";
    EventStatus[EventStatus["endNap"] = 9] = "endNap";
    EventStatus[EventStatus["startWar"] = 10] = "startWar";
    EventStatus[EventStatus["endWar"] = 11] = "endWar";
    EventStatus[EventStatus["join"] = 12] = "join";
    EventStatus[EventStatus["leave"] = 13] = "leave";
    EventStatus[EventStatus["remove"] = 14] = "remove";
    EventStatus[EventStatus["update"] = 15] = "update";
    EventStatus[EventStatus["updateMember"] = 16] = "updateMember";
    EventStatus[EventStatus["reject"] = 17] = "reject";
    EventStatus[EventStatus["cancel"] = 18] = "cancel";
    EventStatus[EventStatus["updateProfile"] = 19] = "updateProfile";
    EventStatus[EventStatus["create"] = 20] = "create";
})(EventStatus = exports.EventStatus || (exports.EventStatus = {}));
exports.diplomacyTypeName = {
    0: 'Alliance',
    2: 'Nap',
};
exports.ALLIANCE_PERMISSIONS = [
    'viewInvites',
    'editInvites',
    'manageForum',
    'editProfile',
    'viewManagement',
    'manageRoles',
    'manageAlliance',
];
