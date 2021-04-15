const { MissingPropertyError, InvalidPropertyError } = require("../../helpers")

module.exports = function buildMakeRequest({ isValidDomainId, isValidSourceType, isValidSource }) {
    return ({ 
        domainId, 
        mode, 
        sourceType, 
        source, 
        result = {},
        status = "pending" 
    }) => {

        if (!domainId) {
            throw new MissingPropertyError('domainId', domainId);
        } 

        if (!isValidDomainId({ domainId })) {
            throw new InvalidPropertyError('domainId', domainId);
        }

        if (!mode) {
            throw new MissingPropertyError('mode', mode);
        } 

        if (!sourceType) {
            throw new MissingPropertyError('sourceType', sourceType);
        }

        if (!isValidSourceType({ sourceType })) {
            throw new InvalidPropertyError('sourceType', sourceType);
        }

        if (!source) {
            throw new MissingPropertyError('source', source);
        }

        if (!isValidSource({ source, sourceType })) {
            throw new InvalidPropertyError('source', source);
        }

        return Object.freeze({
            getDomainId: () => domainId,
            getMode: () => mode,
            getSourceType: () => sourceType,
            getSource: () => source,
            getResult: () => result,
            getStatus: () => status
        });
        
    }
}