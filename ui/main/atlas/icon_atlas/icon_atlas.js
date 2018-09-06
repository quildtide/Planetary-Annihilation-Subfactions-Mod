﻿var model;
var handlers;

$(document).ready(function () {

    function IconAtlasViewModel() {
        var self = this;

        self.strategicIconSource = function (string) { return 'img/strategic_icons/' + 'icon_si_' + string + '.png' }
        self.strategicIcons = ko.observableArray([
            'blip',
            'metal_splat_02',
            'control_point_01',
            'artillery_short',
            'artillery_long',
            'land_barrier',
            'commander',
            'metal_extractor',     
            'metal_extractor_adv',   
            'air_factory_adv',
            'air_factory',
            'bot_factory_adv',
            'bot_factory',
            'vehicle_factory_adv',
            'vehicle_factory',
            'naval_factory_adv',
            'naval_factory',
            'energy_plant_adv',
            'energy_plant',
            'radar_adv',
            'radar',
            'energy_storage',
            'metal_storage',
            'laser_defense_adv',
            'laser_defense',
            'laser_defense_single',
            'air_defense',
            'air_defense_adv',
            'fighter',
            'fighter_adv',
            'bomber_adv',
            'bomber',
            'fabrication_aircraft_adv',
            'fabrication_aircraft',
            'air_scout',
            'assault_bot_adv',
            'assault_bot',
            'fabrication_bot_adv',
            'fabrication_bot',
            'battleship',
            'destroyer',
            'frigate',
            'missile_ship',
            'fabrication_ship_adv',
            'fabrication_ship',
            'sea_scout',
            'attack_sub',
            'nuclear_sub',
            'tank_laser_adv',
            'tank_light_laser',
            'tank_heavy_mortar',
            'fabrication_vehicle_adv',
            'fabrication_vehicle',
            'aa_missile_vehicle',
            'land_scout',
            'torpedo_launcher',
            'torpedo_launcher_adv',
            'orbital_laser',
            'radar_satellite',
            'radar_satellite_adv',
            'solar_array',
            'orbital_launcher',
            'orbital_fighter',
            'orbital_lander',
            'deep_space_radar',
            'ion_defense',
            'delta_v_engine',
            'tactical_missile_launcher',
            'commander',
            'nuke_launcher',
            'anti_nuke_launcher',
            'nuke_launcher_ammo',
            'anti_nuke_launcher_ammo',
            'avatar',
            'teleporter',
            'orbital_fabrication_bot',
            'gunship',
            'defense_satellite',
            'tank_armor',
            'tank_heavy_armor',
            'fabrication_bot_combat',
            'fabrication_bot_combat_adv',
            'bot_grenadier',
            'bot_sniper',
            'bot_tactical_missile',
            'bot_bomb',
            'land_mine',
            'orbital_factory',
            'transport',
            'control_module',
            'mining_platform',
            'metal_spot_preview',
            'unit_cannon',
            'titan_bot',
            'titan_vehicle',
            'titan_air',
            'titan_sea',
            'titan_orbital',
            'bot_tesla',
            'bot_support_commander',
            'bot_nanoswarm',
            'tank_hover',
            'tank_lava',
            'tank_nuke',
            'solar_drone',
            'bomber_heavy',
            'support_platform',
            'fabrication_barge',
            'hover_ship',
            'orbital_probe',
            'orbital_battleship',
            'orbital_railgun',
            'tank_flak',
            'paratrooper',
            'carrier',
            'drone',
            'artillery_unit_launcher',
            'titan_structure',
            'tutorial_titan_commander',
			
			
			'artillery_short_f',
            'artillery_long_f',
            'land_barrier_f',
            'commander_f',
            'metal_extractor_f',     
            'metal_extractor_adv_f',   
            'air_factory_adv_f',
            'air_factory_f',
            'bot_factory_adv_f',
            'bot_factory_f',
            'vehicle_factory_adv_f',
            'vehicle_factory_f',
            'naval_factory_adv_f',
            'naval_factory_f',
            'energy_plant_f',
            'radar_adv_f',
            'radar_f',
            'energy_storage_f',
            'metal_storage_adv_f',
            'metal_storage_f',
            'laser_defense_adv_f',
            'laser_defense_f',
            'laser_defense_single_f',
            'air_defense_f',
            'air_defense_adv_f',
            'fighter_f',
            'fighter_adv_f',
            'bomber_adv_f',
            'bomber_f',
            'fabrication_aircraft_adv_f',
            'fabrication_aircraft_f',
            'air_scout_f',
            'assault_bot_adv_f',
            'assault_bot_f',
            'fabrication_bot_adv_f',
            'fabrication_bot_f',
            'battleship_f',
            'destroyer_f',
            'frigate_f',
            'borealis_f',
            'fabrication_ship_adv_f',
            'fabrication_ship_f',
            'sea_scout_f',
            'sub_hunter_f',
            'nuclear_sub_f',
            'tank_laser_adv_f',
            'tank_light_laser_f',
            'tank_heavy_mortar_f',
            'fabrication_vehicle_adv_f',
            'fabrication_vehicle_f',
            'aa_missile_vehicle_f',
            'land_scout_f',
            'torpedo_launcher_f',
            'torpedo_launcher_adv_f',
            'orbital_laser_f',
            'radar_satellite_f',
            'radar_satellite_adv_f',
            'solar_array_f',
            'orbital_launcher_f',
            'orbital_fighter_f',
            'orbital_lander_f',
            'deep_space_radar_f',
            'ion_defense_f',
            'delta_v_engine_f',
            'tactical_missile_launcher_f',
            'commander_f',
            'nuke_launcher_f',
            'anti_nuke_launcher_f',
            'nuke_launcher_ammo_f',
            'anti_nuke_launcher_ammo_f',
            'teleporter_f',
            'orbital_fabrication_bot_f',
            'gunship_f',
            'defense_satellite_f',
            'tank_armor_f',
            'tank_heavy_armor_f',
            'fabrication_bot_combat_f',
            'fabrication_bot_combat_adv_f',
            'bot_grenadier_f',
            'bot_sniper_f',
            'bot_tactical_missile_f',
            'bot_bomb_f',
            'land_mine_f',
            'orbital_factory_f',
            'transport_f',
            'control_module_f',
            'mining_platform_f',
            'metal_spot_preview_f',
            'unit_cannon_f',
            'titan_bot_f',
            'titan_vehicle_f',
            'titan_air_f',
            'titan_sea_f',
            'titan_orbital_f',
            'bot_tesla_f',
            'bot_support_commander_f',
            'bot_nanoswarm_f',
            'tank_hover_f',
            'tank_lava_f',
            'tank_nuke_f',
            'solar_drone_f',
            'bomber_heavy_f',
            'support_platform_f',
            'fabrication_barge_f',
            'hover_ship_f',
            'orbital_probe_f',
            'orbital_battleship_f',
            'orbital_railgun_f',
            'tank_flak_f',
            'carrier_f',
            'drone_f',
            'artillery_unit_launcher_f',
            'titan_structure_f',
			'heal_drone_f',
        ]);

        self.sendIconList = function () {
            var list = model.strategicIcons();
            engine.call('handle_icon_list', list, 52);
        }
    }
    model = new IconAtlasViewModel();
    handlers = {};

    // inject per scene mods
    if (scene_mod_list['icon_atlas'])
        loadMods(scene_mod_list['icon_atlas']);

    // setup send/recv messages and signals
    app.registerWithCoherent(model, handlers);

    // Activates knockout.js
    ko.applyBindings(model);

    model.sendIconList();

});
