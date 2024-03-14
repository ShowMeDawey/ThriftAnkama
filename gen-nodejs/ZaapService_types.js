//
// Autogenerated by Thrift Compiler (0.16.0)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//
"use strict";

var thrift = require('thrift');
var Thrift = thrift.Thrift;
var Q = thrift.Q;
var Int64 = require('node-int64');


var ttypes = module.exports = {};
ttypes.NotificationResultType = {
  'CLICK' : 1,
  'CLOSE' : 2,
  'FADE' : 3,
  'REPLY' : 4,
  'ACTION' : 5
};
var OverlayPosition = module.exports.OverlayPosition = function(args) {
  this._posX = null;
  this._posY = null;
  this._width = null;
  this._height = null;
  if (args) {
    if (args._posX !== undefined && args._posX !== null) {
      this._posX = args._posX;
    }
    if (args._posY !== undefined && args._posY !== null) {
      this._posY = args._posY;
    }
    if (args._width !== undefined && args._width !== null) {
      this._width = args._width;
    }
    if (args._height !== undefined && args._height !== null) {
      this._height = args._height;
    }
  }
};
OverlayPosition.prototype = {};
OverlayPosition.prototype.read = function(input) {
  input.readStructBegin();
  while (true) {
    var ret = input.readFieldBegin();
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid) {
      case 1:
      if (ftype == Thrift.Type.I32) {
        this._posX = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.I32) {
        this._posY = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.I32) {
        this._width = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.I32) {
        this._height = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

OverlayPosition.prototype.write = function(output) {
  output.writeStructBegin('OverlayPosition');
  if (this._posX !== null && this._posX !== undefined) {
    output.writeFieldBegin('_posX', Thrift.Type.I32, 1);
    output.writeI32(this._posX);
    output.writeFieldEnd();
  }
  if (this._posY !== null && this._posY !== undefined) {
    output.writeFieldBegin('_posY', Thrift.Type.I32, 2);
    output.writeI32(this._posY);
    output.writeFieldEnd();
  }
  if (this._width !== null && this._width !== undefined) {
    output.writeFieldBegin('_width', Thrift.Type.I32, 3);
    output.writeI32(this._width);
    output.writeFieldEnd();
  }
  if (this._height !== null && this._height !== undefined) {
    output.writeFieldBegin('_height', Thrift.Type.I32, 4);
    output.writeI32(this._height);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var NotificationOptions = module.exports.NotificationOptions = function(args) {
  this._title = null;
  this._subtitle = null;
  this._body = null;
  this._silent = null;
  this._icon = null;
  this._hasReply = null;
  this._timeoutType = null;
  this._replyPlaceholder = null;
  this._sound = null;
  this._urgency = null;
  this._actions = null;
  this._closeButtonText = null;
  this._toastXml = null;
  if (args) {
    if (args._title !== undefined && args._title !== null) {
      this._title = args._title;
    }
    if (args._subtitle !== undefined && args._subtitle !== null) {
      this._subtitle = args._subtitle;
    }
    if (args._body !== undefined && args._body !== null) {
      this._body = args._body;
    }
    if (args._silent !== undefined && args._silent !== null) {
      this._silent = args._silent;
    }
    if (args._icon !== undefined && args._icon !== null) {
      this._icon = args._icon;
    }
    if (args._hasReply !== undefined && args._hasReply !== null) {
      this._hasReply = args._hasReply;
    }
    if (args._timeoutType !== undefined && args._timeoutType !== null) {
      this._timeoutType = args._timeoutType;
    }
    if (args._replyPlaceholder !== undefined && args._replyPlaceholder !== null) {
      this._replyPlaceholder = args._replyPlaceholder;
    }
    if (args._sound !== undefined && args._sound !== null) {
      this._sound = args._sound;
    }
    if (args._urgency !== undefined && args._urgency !== null) {
      this._urgency = args._urgency;
    }
    if (args._actions !== undefined && args._actions !== null) {
      this._actions = Thrift.copyList(args._actions, [null]);
    }
    if (args._closeButtonText !== undefined && args._closeButtonText !== null) {
      this._closeButtonText = args._closeButtonText;
    }
    if (args._toastXml !== undefined && args._toastXml !== null) {
      this._toastXml = args._toastXml;
    }
  }
};
NotificationOptions.prototype = {};
NotificationOptions.prototype.read = function(input) {
  input.readStructBegin();
  while (true) {
    var ret = input.readFieldBegin();
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid) {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this._title = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this._subtitle = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this._body = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.BOOL) {
        this._silent = input.readBool();
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.STRING) {
        this._icon = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 6:
      if (ftype == Thrift.Type.BOOL) {
        this._hasReply = input.readBool();
      } else {
        input.skip(ftype);
      }
      break;
      case 7:
      if (ftype == Thrift.Type.STRING) {
        this._timeoutType = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 8:
      if (ftype == Thrift.Type.STRING) {
        this._replyPlaceholder = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 9:
      if (ftype == Thrift.Type.STRING) {
        this._sound = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 10:
      if (ftype == Thrift.Type.STRING) {
        this._urgency = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 11:
      if (ftype == Thrift.Type.LIST) {
        this._actions = [];
        var _rtmp31 = input.readListBegin();
        var _size0 = _rtmp31.size || 0;
        for (var _i2 = 0; _i2 < _size0; ++_i2) {
          var elem3 = null;
          elem3 = input.readString();
          this._actions.push(elem3);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 12:
      if (ftype == Thrift.Type.STRING) {
        this._closeButtonText = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 13:
      if (ftype == Thrift.Type.STRING) {
        this._toastXml = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

NotificationOptions.prototype.write = function(output) {
  output.writeStructBegin('NotificationOptions');
  if (this._title !== null && this._title !== undefined) {
    output.writeFieldBegin('_title', Thrift.Type.STRING, 1);
    output.writeString(this._title);
    output.writeFieldEnd();
  }
  if (this._subtitle !== null && this._subtitle !== undefined) {
    output.writeFieldBegin('_subtitle', Thrift.Type.STRING, 2);
    output.writeString(this._subtitle);
    output.writeFieldEnd();
  }
  if (this._body !== null && this._body !== undefined) {
    output.writeFieldBegin('_body', Thrift.Type.STRING, 3);
    output.writeString(this._body);
    output.writeFieldEnd();
  }
  if (this._silent !== null && this._silent !== undefined) {
    output.writeFieldBegin('_silent', Thrift.Type.BOOL, 4);
    output.writeBool(this._silent);
    output.writeFieldEnd();
  }
  if (this._icon !== null && this._icon !== undefined) {
    output.writeFieldBegin('_icon', Thrift.Type.STRING, 5);
    output.writeString(this._icon);
    output.writeFieldEnd();
  }
  if (this._hasReply !== null && this._hasReply !== undefined) {
    output.writeFieldBegin('_hasReply', Thrift.Type.BOOL, 6);
    output.writeBool(this._hasReply);
    output.writeFieldEnd();
  }
  if (this._timeoutType !== null && this._timeoutType !== undefined) {
    output.writeFieldBegin('_timeoutType', Thrift.Type.STRING, 7);
    output.writeString(this._timeoutType);
    output.writeFieldEnd();
  }
  if (this._replyPlaceholder !== null && this._replyPlaceholder !== undefined) {
    output.writeFieldBegin('_replyPlaceholder', Thrift.Type.STRING, 8);
    output.writeString(this._replyPlaceholder);
    output.writeFieldEnd();
  }
  if (this._sound !== null && this._sound !== undefined) {
    output.writeFieldBegin('_sound', Thrift.Type.STRING, 9);
    output.writeString(this._sound);
    output.writeFieldEnd();
  }
  if (this._urgency !== null && this._urgency !== undefined) {
    output.writeFieldBegin('_urgency', Thrift.Type.STRING, 10);
    output.writeString(this._urgency);
    output.writeFieldEnd();
  }
  if (this._actions !== null && this._actions !== undefined) {
    output.writeFieldBegin('_actions', Thrift.Type.LIST, 11);
    output.writeListBegin(Thrift.Type.STRING, this._actions.length);
    for (var iter4 in this._actions) {
      if (this._actions.hasOwnProperty(iter4)) {
        iter4 = this._actions[iter4];
        output.writeString(iter4);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  if (this._closeButtonText !== null && this._closeButtonText !== undefined) {
    output.writeFieldBegin('_closeButtonText', Thrift.Type.STRING, 12);
    output.writeString(this._closeButtonText);
    output.writeFieldEnd();
  }
  if (this._toastXml !== null && this._toastXml !== undefined) {
    output.writeFieldBegin('_toastXml', Thrift.Type.STRING, 13);
    output.writeString(this._toastXml);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var NotificationParams = module.exports.NotificationParams = function(args) {
  this._id = null;
  this._body = null;
  this._image = null;
  this._subTitle = null;
  this._background = null;
  this._timeout = null;
  if (args) {
    if (args._id !== undefined && args._id !== null) {
      this._id = args._id;
    }
    if (args._body !== undefined && args._body !== null) {
      this._body = args._body;
    }
    if (args._image !== undefined && args._image !== null) {
      this._image = Thrift.copyList(args._image, [null]);
    }
    if (args._subTitle !== undefined && args._subTitle !== null) {
      this._subTitle = args._subTitle;
    }
    if (args._background !== undefined && args._background !== null) {
      this._background = args._background;
    }
    if (args._timeout !== undefined && args._timeout !== null) {
      this._timeout = args._timeout;
    }
  }
};
NotificationParams.prototype = {};
NotificationParams.prototype.read = function(input) {
  input.readStructBegin();
  while (true) {
    var ret = input.readFieldBegin();
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid) {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this._id = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this._body = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.LIST) {
        this._image = [];
        var _rtmp36 = input.readListBegin();
        var _size5 = _rtmp36.size || 0;
        for (var _i7 = 0; _i7 < _size5; ++_i7) {
          var elem8 = null;
          elem8 = input.readString();
          this._image.push(elem8);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.STRING) {
        this._subTitle = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.STRING) {
        this._background = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 6:
      if (ftype == Thrift.Type.I32) {
        this._timeout = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

NotificationParams.prototype.write = function(output) {
  output.writeStructBegin('NotificationParams');
  if (this._id !== null && this._id !== undefined) {
    output.writeFieldBegin('_id', Thrift.Type.STRING, 1);
    output.writeString(this._id);
    output.writeFieldEnd();
  }
  if (this._body !== null && this._body !== undefined) {
    output.writeFieldBegin('_body', Thrift.Type.STRING, 2);
    output.writeString(this._body);
    output.writeFieldEnd();
  }
  if (this._image !== null && this._image !== undefined) {
    output.writeFieldBegin('_image', Thrift.Type.LIST, 3);
    output.writeListBegin(Thrift.Type.STRING, this._image.length);
    for (var iter9 in this._image) {
      if (this._image.hasOwnProperty(iter9)) {
        iter9 = this._image[iter9];
        output.writeString(iter9);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  if (this._subTitle !== null && this._subTitle !== undefined) {
    output.writeFieldBegin('_subTitle', Thrift.Type.STRING, 4);
    output.writeString(this._subTitle);
    output.writeFieldEnd();
  }
  if (this._background !== null && this._background !== undefined) {
    output.writeFieldBegin('_background', Thrift.Type.STRING, 5);
    output.writeString(this._background);
    output.writeFieldEnd();
  }
  if (this._timeout !== null && this._timeout !== undefined) {
    output.writeFieldBegin('_timeout', Thrift.Type.I32, 6);
    output.writeI32(this._timeout);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var NotificationResult = module.exports.NotificationResult = function(args) {
  this._id = null;
  this._type = null;
  this._reply = null;
  this._actionIndex = null;
  if (args) {
    if (args._id !== undefined && args._id !== null) {
      this._id = args._id;
    }
    if (args._type !== undefined && args._type !== null) {
      this._type = args._type;
    }
    if (args._reply !== undefined && args._reply !== null) {
      this._reply = args._reply;
    }
    if (args._actionIndex !== undefined && args._actionIndex !== null) {
      this._actionIndex = args._actionIndex;
    }
  }
};
NotificationResult.prototype = {};
NotificationResult.prototype.read = function(input) {
  input.readStructBegin();
  while (true) {
    var ret = input.readFieldBegin();
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid) {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this._id = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.I32) {
        this._type = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this._reply = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.STRING) {
        this._actionIndex = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

NotificationResult.prototype.write = function(output) {
  output.writeStructBegin('NotificationResult');
  if (this._id !== null && this._id !== undefined) {
    output.writeFieldBegin('_id', Thrift.Type.STRING, 1);
    output.writeString(this._id);
    output.writeFieldEnd();
  }
  if (this._type !== null && this._type !== undefined) {
    output.writeFieldBegin('_type', Thrift.Type.I32, 2);
    output.writeI32(this._type);
    output.writeFieldEnd();
  }
  if (this._reply !== null && this._reply !== undefined) {
    output.writeFieldBegin('_reply', Thrift.Type.STRING, 3);
    output.writeString(this._reply);
    output.writeFieldEnd();
  }
  if (this._actionIndex !== null && this._actionIndex !== undefined) {
    output.writeFieldBegin('_actionIndex', Thrift.Type.STRING, 4);
    output.writeString(this._actionIndex);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};
