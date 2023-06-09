"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const common_2 = require("@nestjs/typeorm/dist/common");
const contact_entity_1 = require("../contact.entity");
let ContactsService = class ContactsService {
    constructor(contactRepository) {
        this.contactRepository = contactRepository;
    }
    async findAll() {
        return await this.contactRepository.find();
    }
    async create(contact) {
        return await this.contactRepository.save(contact);
    }
    async update(contact) {
        return await this.contactRepository.update(contact.id, contact);
    }
    async delete(id) {
        return await this.contactRepository.delete(id);
    }
};
ContactsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_2.InjectRepository)(contact_entity_1.Contact)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], ContactsService);
exports.ContactsService = ContactsService;
//# sourceMappingURL=contacts.service.js.map