import finance from "@/src/assets/finance_blue.svg";
import process from "@/src/assets/order_approve_blue.svg";
import terminal from "@/src/assets/terminal.svg";
import SolucaoCard from "../../SolucaoCard";

const SecaoSolucoes = () => {
  return (
    <div className="w-full h-screen bg-meu-azul-800">
      <div className="ml-auto mr-auto w-10/12 pt-16 pb-16 h-full">
        <h2 className="text-meu-verde-300 font-bold text-6xl mb-8">
          Nossas Soluções
        </h2>
        <div className="w-full min-h-full grid grid-cols-3 pt-12 pb-12">
          <SolucaoCard
            title="Stax Finance"
            subtitle="Consultoria e BPO Financeiro"
            icon={finance}
            imgTag="layeredLeft"
            cta="Quero organizar meu financeiro"
          >
            <p className="text-lg text-justify mb-2 leading-tight">
              A <strong>Stax Finance</strong> cuida da saúde financeira da sua
              empresa para que você tenha controle, previsibilidade e segurança
              nas decisões. Organizamos seus números, estruturamos processos e,
              se necessário, assumimos a operação financeira do seu negócio.
            </p>
            <p className="text-lg font-bold">Incluso neste serviço:</p>
            <ul className="text-base">
              <li>✔ Organização do fluxo de caixa</li>
              <li>✔ Contas a pagar e receber</li>
              <li>✔ Relatórios financeiros e indicadores</li>
              <li>✔ Precificação e análise de custos</li>
              <li>✔ Planejamento financeiro</li>
              <li>✔ BPO Financeiro (terceirização completa)</li>
            </ul>
          </SolucaoCard>

          <SolucaoCard
            title="Stax Process"
            subtitle="Consultoria de Processos e CRM"
            icon={process}
            imgTag="layeredCenter"
            cta="Quero organizar meus processos"
          >
            <p className="text-lg text-justify mb-2 leading-tight">
              A <strong>Stax Process</strong> estrutura o funcionamento da sua
              empresa. Organizamos processos, implantamos CRM e criamos fluxos
              inteligentes para aumentar produtividade, vendas e controle
              operacional.
            </p>
            <p className="text-lg font-bold">Incluso neste serviço:</p>
            <ul className="text-base">
              <li>✔ Mapeamento e organização de processos</li>
              <li>✔ Implantação de CRM (Bitrix24 ou StaxPro)</li>
              <li>✔ Funis de vendas personalizados</li>
              <li>✔ Automação de atendimentos e tarefas</li>
              <li>✔ Integração entre setores</li>
              <li>✔ Treinamento da equipe</li>
            </ul>
          </SolucaoCard>

          <SolucaoCard
            title="Stax Systems"
            subtitle="Desenvolvimento de Sistemas"
            icon={terminal}
            imgTag="layeredRight"
            cta="Quero uma solução personalizada"
          >
            <p className="text-lg text-justify mb-2 leading-tight">
              A <strong>Stax Systems</strong> desenvolve soluções tecnológicas
              sob medida para o seu negócio. Criamos sistemas, plataformas e
              integrações que automatizam rotinas e conectam sua empresa às
              ferramentas certas.
            </p>
            <p className="text-lg font-bold">Incluso neste serviço:</p>
            <ul className="text-base">
              <li>✔ Desenvolvimento de sistemas e plataformas</li>
              <li>✔ Integrações com WhatsApp, Facebook e CRM</li>
              <li>✔ Automações personalizadas</li>
              <li>✔ Portais, dashboards e painéis administrativos</li>
              <li>✔ Soluções sob medida para o seu negócio</li>
            </ul>
          </SolucaoCard>
        </div>
      </div>
    </div>
  );
};
export default SecaoSolucoes;
