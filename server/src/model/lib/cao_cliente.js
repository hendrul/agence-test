/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('caoCliente', {
		coCliente: {
			type: DataTypes.INTEGER(11).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'co_cliente'
		},
		noRazao: {
			type: DataTypes.STRING(50),
			allowNull: true,
			field: 'no_razao'
		},
		noFantasia: {
			type: DataTypes.STRING(50),
			allowNull: true,
			field: 'no_fantasia'
		},
		noContato: {
			type: DataTypes.STRING(30),
			allowNull: true,
			field: 'no_contato'
		},
		nuTelefone: {
			type: DataTypes.STRING(15),
			allowNull: true,
			field: 'nu_telefone'
		},
		nuRamal: {
			type: DataTypes.STRING(6),
			allowNull: true,
			field: 'nu_ramal'
		},
		nuCnpj: {
			type: DataTypes.STRING(18),
			allowNull: true,
			field: 'nu_cnpj'
		},
		dsEndereco: {
			type: DataTypes.STRING(150),
			allowNull: true,
			field: 'ds_endereco'
		},
		nuNumero: {
			type: DataTypes.INTEGER(6),
			allowNull: true,
			field: 'nu_numero'
		},
		dsComplemento: {
			type: DataTypes.STRING(150),
			allowNull: true,
			field: 'ds_complemento'
		},
		noBairro: {
			type: DataTypes.STRING(50),
			allowNull: false,
			defaultValue: '',
			field: 'no_bairro'
		},
		nuCep: {
			type: DataTypes.STRING(10),
			allowNull: true,
			field: 'nu_cep'
		},
		noPais: {
			type: DataTypes.STRING(50),
			allowNull: true,
			field: 'no_pais'
		},
		coRamo: {
			type: DataTypes.BIGINT,
			allowNull: true,
			field: 'co_ramo'
		},
		coCidade: {
			type: DataTypes.BIGINT,
			allowNull: false,
			defaultValue: '0',
			field: 'co_cidade'
		},
		coStatus: {
			type: DataTypes.INTEGER(11).UNSIGNED,
			allowNull: true,
			field: 'co_status'
		},
		dsSite: {
			type: DataTypes.STRING(50),
			allowNull: true,
			field: 'ds_site'
		},
		dsEmail: {
			type: DataTypes.STRING(50),
			allowNull: true,
			field: 'ds_email'
		},
		dsCargoContato: {
			type: DataTypes.STRING(50),
			allowNull: true,
			field: 'ds_cargo_contato'
		},
		tpCliente: {
			type: DataTypes.CHAR(2),
			allowNull: true,
			field: 'tp_cliente'
		},
		dsReferencia: {
			type: DataTypes.STRING(100),
			allowNull: true,
			field: 'ds_referencia'
		},
		coComplementoStatus: {
			type: DataTypes.INTEGER(11).UNSIGNED,
			allowNull: true,
			field: 'co_complemento_status'
		},
		nuFax: {
			type: DataTypes.STRING(15),
			allowNull: true,
			field: 'nu_fax'
		},
		ddd2: {
			type: DataTypes.STRING(10),
			allowNull: true,
			field: 'ddd2'
		},
		telefone2: {
			type: DataTypes.STRING(20),
			allowNull: true,
			field: 'telefone2'
		}
	}, {
		tableName: 'cao_cliente'
	});
};
