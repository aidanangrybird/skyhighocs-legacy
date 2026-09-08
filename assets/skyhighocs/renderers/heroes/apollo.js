extend("skyhighocs:base_astro");

var astro = implement("skyhighocs:external/astro");
var stuff = implement("skyhighocs:external/stuff");

loadTextures({
  "head_lights": "skyhighocs:casp/apollo_head_lights",
  "body_lights": "skyhighocs:casp/apollo_body_lights",
  "left_arm_lights": "skyhighocs:casp/apollo_left_arm_lights",
  "right_arm_lights": "skyhighocs:casp/apollo_right_arm_lights",
  "left_leg_lights": "skyhighocs:casp/apollo_left_leg_lights",
  "right_leg_lights": "skyhighocs:casp/apollo_right_leg_lights",
  "head_base": "skyhighocs:casp/apollo_head_base.tx.json",
  "head_hair_base": "skyhighocs:casp/apollo_head_hair_base.tx.json",
  "body_base": "skyhighocs:casp/apollo_body_base.tx.json",
  "left_arm_base": "skyhighocs:casp/apollo_left_arm_base.tx.json",
  "right_arm_base": "skyhighocs:casp/apollo_right_arm_base.tx.json",
  "left_leg_base": "skyhighocs:casp/apollo_left_leg_base.tx.json",
  "right_leg_base": "skyhighocs:casp/apollo_right_leg_base.tx.json",
  "boots": "skyhighocs:casp/apollo_boots",
  "shorts": "skyhighocs:casp/apollo_shorts",
  "santa_hat": "skyhighocs:casp/apollo_santa_hat",
  "character_0": "skyhighocs:characters/casp/casp_character_0",
  "character_1": "skyhighocs:characters/casp/casp_character_1",
  "character_2": "skyhighocs:characters/casp/casp_character_2",
  "character_3": "skyhighocs:characters/casp/casp_character_3",
  "character_4": "skyhighocs:characters/casp/casp_character_4",
  "character_5": "skyhighocs:characters/casp/casp_character_5",
  "character_6": "skyhighocs:characters/casp/casp_character_6",
  "character_7": "skyhighocs:characters/casp/casp_character_7",
  "character_8": "skyhighocs:characters/casp/casp_character_8",
  "character_9": "skyhighocs:characters/casp/casp_character_9",
  "character_10": "skyhighocs:characters/casp/casp_character_10",
  "character_11": "skyhighocs:characters/casp/casp_character_11",
  "character_12": "skyhighocs:characters/casp/casp_character_12",
  "character_13": "skyhighocs:characters/casp/casp_character_13",
  "character_14": "skyhighocs:characters/casp/casp_character_14",
  "character_15": "skyhighocs:characters/casp/casp_character_15",
  "character_16": "skyhighocs:characters/casp/casp_character_16",
  "character_17": "skyhighocs:characters/casp/casp_character_17",
  "character_18": "skyhighocs:characters/casp/casp_character_18",
  "character_19": "skyhighocs:characters/casp/casp_character_19",
  "character_20": "skyhighocs:characters/casp/casp_character_20",
  "character_21": "skyhighocs:characters/casp/casp_character_21",
  "character_22": "skyhighocs:characters/casp/casp_character_22",
  "character_23": "skyhighocs:characters/casp/casp_character_23",
  "character_24": "skyhighocs:characters/casp/casp_character_24",
  "character_25": "skyhighocs:characters/casp/casp_character_25",
  "character_26": "skyhighocs:characters/casp/casp_character_26",
  "character_27": "skyhighocs:characters/casp/casp_character_27",
  "character_28": "skyhighocs:characters/casp/casp_character_28",
  "character_29": "skyhighocs:characters/casp/casp_character_29",
  "character_30": "skyhighocs:characters/casp/casp_character_30",
  "character_31": "skyhighocs:characters/casp/casp_character_31",
  "character_32": "skyhighocs:characters/casp/casp_character_32",
  "character_33": "skyhighocs:characters/casp/casp_character_33",
  "character_34": "skyhighocs:characters/casp/casp_character_34",
  "character_35": "skyhighocs:characters/casp/casp_character_35",
  "character_36": "skyhighocs:characters/casp/casp_character_36",
  "character_37": "skyhighocs:characters/casp/casp_character_37",
  "character_38": "skyhighocs:characters/casp/casp_character_38",
  "character_39": "skyhighocs:characters/casp/casp_character_39",
  "character_40": "skyhighocs:characters/casp/casp_character_40",
  "character_41": "skyhighocs:characters/casp/casp_character_41",
  "character_42": "skyhighocs:characters/casp/casp_character_42",
  "character_43": "skyhighocs:characters/casp/casp_character_43",
  "character_44": "skyhighocs:characters/casp/casp_character_44",
  "character_45": "skyhighocs:characters/casp/casp_character_45",
  "character_46": "skyhighocs:characters/casp/casp_character_46",
  "character_47": "skyhighocs:characters/casp/casp_character_47",
  "character_48": "skyhighocs:characters/casp/casp_character_48",
  "character_49": "skyhighocs:characters/casp/casp_character_49",
  "character_50": "skyhighocs:characters/casp/casp_character_50",
  "character_51": "skyhighocs:characters/casp/casp_character_51",
  "character_52": "skyhighocs:characters/casp/casp_character_52",
  "character_53": "skyhighocs:characters/casp/casp_character_53",
  "character_54": "skyhighocs:characters/casp/casp_character_54",
  "character_55": "skyhighocs:characters/casp/casp_character_55",
  "character_56": "skyhighocs:characters/casp/casp_character_56",
  "character_57": "skyhighocs:characters/casp/casp_character_57",
  "character_58": "skyhighocs:characters/casp/casp_character_58",
  "character_59": "skyhighocs:characters/casp/casp_character_59",
  "character_60": "skyhighocs:characters/casp/casp_character_60",
  "character_61": "skyhighocs:characters/casp/casp_character_61",
  "character_62": "skyhighocs:characters/casp/casp_character_62",
  "character_63": "skyhighocs:characters/casp/casp_character_63",
  "character_64": "skyhighocs:characters/casp/casp_character_64",
  "character_65": "skyhighocs:characters/casp/casp_character_65",
  "character_66": "skyhighocs:characters/casp/casp_character_66",
  "character_67": "skyhighocs:characters/casp/casp_character_67",
  "character_68": "skyhighocs:characters/casp/casp_character_68",
  "character_69": "skyhighocs:characters/casp/casp_character_69",
  "character_70": "skyhighocs:characters/casp/casp_character_70",
  "character_71": "skyhighocs:characters/casp/casp_character_71",
  "character_72": "skyhighocs:characters/casp/casp_character_72",
  "character_73": "skyhighocs:characters/casp/casp_character_73",
  "character_74": "skyhighocs:characters/casp/casp_character_74",
  "character_75": "skyhighocs:characters/casp/casp_character_75",
  "character_76": "skyhighocs:characters/casp/casp_character_76",
  "character_77": "skyhighocs:characters/casp/casp_character_77",
  "character_78": "skyhighocs:characters/casp/casp_character_78",
  "character_79": "skyhighocs:characters/casp/casp_character_79",
  "character_80": "skyhighocs:characters/casp/casp_character_80",
  "character_81": "skyhighocs:characters/casp/casp_character_81",
  "character_82": "skyhighocs:characters/casp/casp_character_82",
  "character_83": "skyhighocs:characters/casp/casp_character_83",
  "character_84": "skyhighocs:characters/casp/casp_character_84",
  "character_85": "skyhighocs:characters/casp/casp_character_85",
  "character_86": "skyhighocs:characters/casp/casp_character_86",
  "character_87": "skyhighocs:characters/casp/casp_character_87",
  "character_88": "skyhighocs:characters/casp/casp_character_88",
  "character_89": "skyhighocs:characters/casp/casp_character_89",
  "character_90": "skyhighocs:characters/casp/casp_character_90",
  "character_91": "skyhighocs:characters/casp/casp_character_91",
  "character_92": "skyhighocs:characters/casp/casp_character_92",
  "character_93": "skyhighocs:characters/casp/casp_character_93"
});

function initEffects(renderer) {
  parent.initEffects(renderer);
};

function getID() {
  return "4da600b8-582a-4fc3-ac2e-ada03d3e478c";
};
function getColor() {
  return "0x55FF00";
};

function init(renderer) {
  parent.init(renderer);
  renderer.setItemIcon("LEGGINGS", "apollo_shorts");
  renderer.setItemIcon("BOOTS", "apollo_boots");
  initEffects(renderer);
  initAnimations(renderer);
};

function render(entity, renderLayer, isFirstPersonArm) {
  parent.render(entity, renderLayer, isFirstPersonArm);
};